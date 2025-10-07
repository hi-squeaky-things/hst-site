<template>
  <div class="min-h-screen bg-gray-100 p-6">
    <div class="max-w-6xl mx-auto bg-white rounded-lg shadow-md p-6">
      <h1 class="text-3xl font-bold text-gray-800 mb-6">Drum Pattern Editor</h1>
      
      <!-- Pattern Metadata -->
      <div class="mb-8 p-4 bg-gray-50 rounded-lg">
        <h2 class="text-xl font-semibold mb-4">Pattern Metadata</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Name</label>
            <input 
              v-model="drumpattern.name" 
              class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Pattern name"
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Description</label>
            <input 
              v-model="drumpattern.description" 
              class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Pattern description"
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Source Kind</label>
            <select 
              v-model="drumpattern.metadata.kind" 
              class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="original">Original</option>
              <option value="syntactic">Syntactic</option>
            </select>
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Source</label>
            <input 
              v-model="drumpattern.metadata.source" 
              class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Pattern source"
            />
          </div>
        </div>
      </div>

      <!-- User Prompts -->
      <div class="mb-8 p-4 bg-gray-50 rounded-lg">
        <h2 class="text-xl font-semibold mb-4">User Prompts</h2>
        <div class="flex flex-wrap gap-2 mb-4">
          <span 
            v-for="(prompt, index) in drumpattern.user_prompts" 
            :key="index"
            class="px-3 py-1 bg-blue-100 text-blue-800 rounded-full flex items-center"
          >
            {{ prompt }}
            <button 
              @click="drumpattern.removePrompt(index)"
              class="ml-2 text-blue-600 hover:text-blue-800"
            >
              &times;
            </button>
          </span>
        </div>
        <div class="flex">
          <input 
            v-model="newPrompt"
            class="flex-grow px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Add new prompt"
          />
          <button 
            @click="drumpattern.addPrompt(newPrompt)"
            class="px-4 py-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600 transition"
          >
            Add
          </button>
        </div>
      </div>

      <!-- Drum Pattern Editor -->
      <div class="p-4 bg-gray-50 rounded-lg">
        <h2 class="text-xl font-semibold mb-4">Drum Pattern</h2>
        <div class="overflow-x-auto">
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-100">
              <tr>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Drum</th>
                <th v-for="beat in 16" :key="beat" class="px-2 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                  {{ beat }}
                </th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <tr v-for="(drum, index) in drumpattern.pattern" :key="index">
                <td class="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900">
                  {{ drumpattern.getDrumName(drum.kind) }}
                </td>
                <td 
                  v-for="beat in 16" 
                  :key="beat" 
                  @click="drumpattern.toggleBeat(drum.line, beat - 1)"
                  class="px-2 py-3 text-center cursor-pointer"
                  :class="{ 'bg-blue-100': drumpattern.getBeatValue(drum.line, beat - 1) === 'x' }"
                >
                  <span class="text-lg">{{ drumpattern.getBeatValue(drum.line, beat - 1) }}</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div class="mt-4 flex justify-end">
          <button 
            class="px-4 py-2 mr-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition"
          >
            Reset
          </button>
          <button 
            class="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition"
          >
            Save Pattern
          </button>
        </div>
      </div>

            <!-- JSON Output -->
      <div class="mt-8 p-4 bg-gray-50 rounded-lg">
        <h2 class="text-xl font-semibold mb-4">JSON Output</h2>
        <div class="flex">
       
        <vue-json-pretty :data=drumpattern.getJson() :show-line="true" />
       </div>   

      </div>
      
    </div>
  </div>
</template>

<script setup lang="ts">
    import { useDrumPatternStore } from '@/stores/drumpattern'
    import { ref } from 'vue'
    import VueJsonPretty from 'vue-json-pretty';
    import 'vue-json-pretty/lib/styles.css';

    const drumpattern = useDrumPatternStore()
    drumpattern.name = "hello"
    const newPrompt = ref('');
</script>