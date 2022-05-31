class TextStyle {
    private text: string;
    constructor(text: string) {
        this.text = text
    }

    static bold = () => {
        const text = `<b>${this.text}`
        return text
    }
}