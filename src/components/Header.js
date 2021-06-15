import React, {Suspense} from 'react'
import {NavLink} from "react-router-dom";
import i18n from "i18next";
import {initReactI18next, useTranslation} from "react-i18next";
import len from  "../len.json"

i18n
    .use(initReactI18next)
    .init({
        resources:{
            en:{translation:len.translationsEn},
            ru:{translation:len.translationsRu},
            am:{translation:len.translationsAm},
        },
        lng:"en",
        fallbackLng:"en",
        interpolation:{escapeValue:false},
    })


const Header = () => {

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
                        <span onClick={changToEn}>EN</span>
                        <span  onClick={changToRu}> | РУ |</span>
                        <span onClick={changToAm}> ՀՅ</span>
                    </li>
                </ul>
            </header>
        </Suspense>
    )
}

export default Header;
