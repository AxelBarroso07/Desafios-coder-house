class FileSystemStorage {
    constructor(filePath) {
        this.filePath = filePath;
    }

    async load() {
        const data = fs.readFileSync(this.filePath, 'utf-8');
        return JSON.parse(data)
    }

    async post(data) {
        fs.writeFileSync(this.filePath, JSON.stringify(data, null, 2));
    }
}

module.exports = FileSystemStorage