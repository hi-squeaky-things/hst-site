import { defineStore } from 'pinia'

export const useDrumPatternStore = defineStore('drumpattern', {
    state: () => {
        return {
            "$schema": "../schema/hst-dataset-drumpattern.json",
            "name": "blues",
            "description": "classic blues pattern",
            "metadata": {
                "kind": "original",
                "source": "xx"
            },
            "user_prompts": [
                "a gently blues pattern",
                "prompt2",
                "prompt3",
                "prompt4",
                "prompt5"
            ],
            "pattern": [
                {
                    "kind": "oh",
                    "line": "xxxxx---x---x---"
                },
                {
                    "kind": "bd",
                    "line": "x---x---x---x---"
                },
                {
                    "kind": "hh",
                    "line": "x---x---x---x---"
                }
            ]
        }
    },

    actions: {
        getJson(): any {
            return this.$state
        },
        addPrompt(prompt: string) {
            this.user_prompts.push(prompt)
        },
        removePrompt(id: number) {
              this.user_prompts = this.user_prompts.filter((_, index) => index !== id);
        },
        toggleBeat(line:string, id: number) {
            const pattern = this.pattern;
            const beat = pattern.find(item => item.line === line);
            if (beat && beat.line) {
                const currentValue = beat.line[id];
                const newValue = currentValue === "x" ? "-" : "x";
                  beat.line = beat.line.substring(0, id) + newValue + beat.line.substring(id + 1);        
            }
        },
        getBeatValue(line:string, id: number): string {
            const pattern = this.pattern;
            const beat = pattern.find(item => item.line === line);
            const value =  beat?.line[id] ?? "?"
            return value
        },
        getDrumName(line:string): string {
            return line
        }
    }
    
})