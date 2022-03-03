const copyToClipBoard = (textToCopy: string) => {
    return (event: React.MouseEvent) => {
        navigator.clipboard.writeText(textToCopy)
    }
}

export default copyToClipBoard