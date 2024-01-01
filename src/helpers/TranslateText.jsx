import { useTranslation } from "react-i18next";

export default function TranslateText(text) {
    const {t} = useTranslation()
    return t(text)
}