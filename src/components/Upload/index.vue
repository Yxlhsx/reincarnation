<script setup lang="ts">
import Log from '@/utils/Log';

const emit = defineEmits(['select-file'])

function getFile(e: Event) {
    const currentTarget: HTMLInputElement = e.target as HTMLInputElement
    const files: FileList | null = currentTarget.files
    if (files) {
        const reader: FileReader = new FileReader()
        reader.readAsText(files[0], 'UTF-8')
        reader.onload = function (_e: ProgressEvent) {
            const _currentTarget = _e.target as FileReader
            const result: string | undefined = _currentTarget.result?.toString()
            if (result) {
                let jsonObj: object = {}
                try {
                    jsonObj = JSON.parse(result)
                } catch {
                    Log.fail("读取失败，文件格式错误")
                }
                emit('select-file', jsonObj)
            } else {
                Log.fail("读取失败，文件内容为空")
            }
        }
    } else {
        Log.fail("读取失败，未选择文件")
    }
}
</script>

<template>
    <div>
        <label for="upload">
            <span>点击上传</span>
        </label>
        <input id="upload" type="file" @change="getFile" />
    </div>
</template>

<style lang="less" scoped>
#upload {
    display: none;
}
</style>
