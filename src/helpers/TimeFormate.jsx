import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en'

TimeAgo.addDefaultLocale(en)


export default function TimeFormate(time = 1703524455878) {
    const timeAgo = new TimeAgo('en-US')
    return (timeAgo.format(new Date(Number(time))))
}