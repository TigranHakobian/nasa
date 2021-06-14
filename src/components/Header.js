import React, {Suspense, useState} from 'react'
import {NavLink} from "react-router-dom";
import i18n from "i18next";
import {initReactI18next, useTranslation} from "react-i18next";

const translationsEn = {
    nb:"BROWSER",
    home:"HOME",
    nearBy:"NEARBY ASTEROIDS",
    apod:"ASTRONOMY PICTURE OF THE DAY",
    snp:"SUBMIT NEW PLANET"


}
const translationsRu = {
    nb:"БРАУЗЕР",
    home:"ГЛАВНАЯ",
    nearBy:"БЛИЖАЙШИЕ АСТЕРОИДЫ",
    apod:"АСТРОНОМИЧЕСКАЯ КАРТИНКА ДНЯ",
    snp:"ДОБАВИТЬ НОВУЮ ПЛАНЕТУ"
}

const translationsAm = {
    nb:"ԲՐԱՈՒԶԵՐ",
    home:"Գլխավոր",
    nearBy:"ՄՈՏԱԿԱ ԱՍՏԵՐՈԻԴԸ",
    apod:"ՕՐՎԱ ԱՍՏԵՐՈԻԴԻ ՆԿԱՐԸ",
    snp:"ԱՎԵԼԱՑՆԵԼ ՆՈՐ ՄՈԼՈՐԱԿ"
}

i18n.use(initReactI18next)
    .init({
        resources:{
            en:{translation:translationsEn},
            ru:{translation:translationsRu},
            am:{translation:translationsAm},
        },
        lng:"en",
        fallbackLng:"en",
        interpolation:{escapeValue:false},
    })


 function Header() {

    const {t} = useTranslation()


     const changToEn = () =>{
         i18n.changeLanguage("en")
     }

     const changToRu = () =>{
         i18n.changeLanguage("ru")
     }

     const changToAm = () =>{
         i18n.changeLanguage("am")
     }







     return (
        <Suspense  fallback={"Loading"}>
        <header>
            {/*<select name="language" onChange={onChangeLng}>*/}
            {/*    <option value="en">En</option>*/}
            {/*    <option value="ru">Ru</option>*/}
            {/*</select>*/}
            <h1 className="title-nasa">NASA {t("nb")} </h1>
            <ul  className="header">

                <li>
                    <NavLink to="home"> {t("home")} </NavLink>
                </li>
                <li>|</li>
                <li>
                    <NavLink to="nearbyasteroids"> {t("nearBy")} </NavLink>
                </li>
                <li>|</li>
                <li>
                    <NavLink to="astronomypictureoftheday"> {t("apod")} </NavLink>
                </li>
                <li>|</li>
                <li>
                    <NavLink to="newplanet"> {t("snp")}</NavLink>
                </li>
                <li className="languages">
                    <span onClick={changToEn}>EN
                    </span>
                    <span  onClick={changToRu}>| РУ |</span>
                    <span onClick={changToAm}> ՀՅ</span>
                </li>
            </ul>
        </header>
        </Suspense>
    )
}

export default Header
