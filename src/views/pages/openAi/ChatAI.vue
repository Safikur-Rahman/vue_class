<template>
  <div class="ai-chat">
    <div class="chat-window">
      <div v-for="(msg, i) in conversation" :key="i">
        <p><strong>{{ msg.sender }}:</strong></p>
        <!-- Render AI messages as Markdown -->
        <div v-if="msg.sender === 'AI'" v-html="renderMarkdown(msg.text)"></div>
        <p v-else>{{ msg.text }}</p>
      </div>
    </div>

    <input
      v-model="userMessage"
      placeholder="Ask AI..."
      @keyup.enter="sendToAI"
    />
    <button @click="sendToAI">Send</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'
import MarkdownIt from 'markdown-it'

const conversation = ref([])
const userMessage = ref('')
const md = new MarkdownIt()

// Convert markdown text to HTML
const renderMarkdown = (text) => md.render(text)

const sendToAI = async () => {
  if (!userMessage.value) return

  const userInput = userMessage.value
  conversation.value.push({
    sender: 'You',
    text: userInput
  })
  userMessage.value = ''

  try {
    const res = await axios.post(
      'http://127.0.0.1:8000/api/ai-chat',
      { message: userInput },
      { headers: { 'Content-Type': 'application/json' } }
    )

    conversation.value.push({
      sender: 'AI',
      text: res.data
    })
  } catch (error) {
    console.error(error)
    conversation.value.push({
      sender: 'AI',
      text: 'Error: Could not get response from AI.'
    })
  }
}
</script>

<style>
.ai-chat {
  width: 400px;
  border: 1px solid #aaa;
  padding: 20px;
}
.chat-window {
  height: 300px;
  overflow-y: auto;
  margin-bottom: 10px;
}
</style>
