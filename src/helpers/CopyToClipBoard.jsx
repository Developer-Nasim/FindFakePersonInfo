export default function CopyToClipBoard(e,url) {
    navigator.clipboard.writeText(`${url}`)
    e.target.classList.add('copied')
    e.target.textContent = 'Coppied'

    setTimeout(() => {
        e.target.classList.remove('copied')
        e.target.textContent = 'Copy'
    },1000)
}