import {resolve} from "path"

export default {
    root: resolve(__dirname, 'src'),
    build: {
        rollupOptions: {
            input: {
                home: resolve(__dirname, 'index.html')
            }
        }
    }
}
