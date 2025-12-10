<template>
  <div class="ai-chat">
    <div class="chat-window">
      <div v-for="(msg, i) in conversation" :key="i">
        <p><strong>{{ msg.sender }}:</strong></p>
        <div v-if="msg.type === 'text'" v-html="renderMarkdown(msg.text)"></div>
        <div v-else-if="msg.type === 'image'">
          <img :src="msg.url" alt="Uploaded" style="max-width: 100%; margin-top: 10px;" />
          <p><strong>Result:</strong> {{ msg.result }}</p>
        </div>
      </div>
    </div>

    <input
      v-model="userMessage"
      placeholder="Ask AI..."
      @keyup.enter="sendToAI"
    />
    <button @click="sendToAI">Send</button>

    <input type="file" @change="uploadImage" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'
import MarkdownIt from 'markdown-it'

const conversation = ref([])
const userMessage = ref('')
const md = new MarkdownIt()

const renderMarkdown = (text) => md.render(text)

const sendToAI = async () => {
  if (!userMessage.value) return

  const userInput = userMessage.value
  conversation.value.push({ sender: 'You', type: 'text', text: userInput })
  userMessage.value = ''

  try {
    const res = await axios.post('http://127.0.0.1:8000/api/ai-chat', { message: userInput })
    conversation.value.push({ sender: 'AI', type: 'text', text: res.data })
  } catch (error) {
    console.error(error)
    conversation.value.push({ sender: 'AI', type: 'text', text: 'Error: Could not get response from AI.' })
  }
}

// Upload image
const uploadImage = async (event) => {
  const file = event.target.files[0]
  if (!file) return

  const formData = new FormData()
  formData.append('image', file)

  try {
    const res = await axios.post('http://127.0.0.1:8000/api/upload-image', formData, {
      headers: { 'Content-Type': 'multipart/form-data' }
    })

    // Show uploaded image and result
    conversation.value.push({
      sender: 'AI',
      type: 'image',
      url: res.data.url,       // saved image URL
      result: res.data.result  // analysis or details from backend
    })
  } catch (error) {
    console.error(error)
    conversation.value.push({ sender: 'AI', type: 'text', text: 'Error: Could not upload image.' })
  }
}
</script>

<style>
.ai-chat { width: 400px; border: 1px solid #aaa; padding: 20px; }
.chat-window { height: 300px; overflow-y: auto; margin-bottom: 10px; }
</style>
