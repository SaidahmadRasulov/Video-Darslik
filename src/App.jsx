import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./all.css"
import NavbarC from "./components/Header/NavbarC";
import Home from "./pages/Home";
import Profession from "./pages/Home/Profession";
import Course from "./pages/Home/Course";
import Section from "./pages/Home/Section";
import Service from "./pages/Home/Services";
import AboutUs from "./pages/Home/AboutUs";
import Contact from "./pages/Home/Contact";
import ProviderContext from "./context/MainContext";
import admin from "../src/media/Adminstrator.png";
import mananger from "../src/media/Mananger.png";
import smm from "../src/media/SMM.png";
import teacher from "../src/media/Teacher.png";
import clean from "../src/media/Cleaner.png";
import cook from "../src/media/Cook.png";
import secure from "../src/media/security.png";
import boss from "../src/media/boss.png";

function App() {

  const [professions, setProfessions] = useState([
    { id: 1, title: "Direktor", img: boss },
    { id: 2, title: "Manager", img: mananger },
    { id: 3, title: "SMM Manager", img: smm },
    { id: 4, title: "Teacher", img: teacher },
    { id: 5, title: "Cleaner", img: clean },
    { id: 6, title: "Cook", img: cook },
    { id: 7, title: "Security", img: secure },
    { id: 8, title: "Administrator", img: admin }
  ]);

  const [sections, setSections] = useState([
    {
      id: 223234846,
      profession: { id: 1, title: 'Director', img: boss },
      deskiription: 'Field director Coordinates activities of civilian aids engaged in providing recreational and welfare services to armed forces personnel: Directs staff in planning and arranging recreational activities. Oversees activities of welfare workers in assisting service personnel to solve personal and family problems.',
      sections: [
        { id: 15, title: 'Assosiy director vazifasi', videos: 5 },
        { id: 14, title: 'Ishchilar bilan muloka', videos: 2 },
        { id: 13, title: 'Boshqa kompaniyalar bilan ishlash', videos: 9 },
        { id: 12, title: 'To`gri yigilishlar otkazish', videos: 4 },
        { id: 11, title: 'Yigilishga assosiy mavzular', videos: 6 },
        { id: 16, title: 'Kompaniyani to`gri boshqarish', videos: 3 },
        { id: 18, title: 'Kompaniyaga etibor berish', videos: 1 },
      ]
    },
    {
      id: 2847,
      profession: { id: 2, title: 'Manager', img: mananger },
      deskiription: 'Managers ensure that their assigned department, store, or district is well staffed and provisioned, adheres to quality and service standards, increases revenue and market share, and helps the business accomplish its goals. They hire and train employees, help develop and implement business strategies, and perform a variety of other tasks to ensure the business is thriving.',
      sections: [
        { id: 152, title: 'Mijoz bilan Ishlash', videos: 5 },
        { id: 142, title: 'Kompaniyada to`gri ish olib borish', videos: 2 },
        { id: 132, title: 'Mijoz bilan to`gri kelishish', videos: 4 },
        { id: 112, title: 'Yangi aksiyalar kilish', videos: 5 },
      ]
    },
    {
      id: 2847,
      profession: { id: 3, title: 'SMM Manager', img: smm },
      deskiription: 'Need to create a compelling Instagram post thats on brand? No problem. You can whip up a clever tweet in your sleep. You shouldnt also have to stress about how to write a resume e have you covered no matter what stage youre at in your career. You can use our online resume builder, check out our expert resume help guide, or access our free Word resume.',
      sections: [
        { id: 153, title: 'Mijoz bilan onlineda Ishlash', videos: 5 },
        { id: 143, title: 'Kontent bilan ishlash', videos: 2 },
        { id: 133, title: 'Mijoz bilan to`gri kelishish', videos: 9 },
        { id: 123, title: 'Proektni to`gri baxolash', videos: 7 },
        { id: 163, title: 'Targetni to`gri olib borish', videos: 6 },
        { id: 173, title: 'SMM Manager faoliyati', videos: 4 },
      ]
    },
    {
      id: 2848,
      profession: { id: 4, title: 'Teacher', img: teacher },
      deskiription: 'A teacher, also called a schoolteacher or formally an educator, is a person who helps students to acquire knowledge, competence or virtue Informally the role of teacher may be taken on by anyone (e.g. when showing a colleague how to perform a specific task). In some countries, teaching young people of school age may be carried out in an informal setting, such as within the family (homeschooling), rather than in a formal setting such as a school or college. Some other professions may involve a significant amount of teaching (e.g. youth worker, pastor)..',
      sections: [
        { id: 154, title: 'Darsga voqtida kirish', videos: 5 },
        { id: 144, title: 'Darsga voqtida tugatish', videos: 2 },
        { id: 134, title: 'Baholash tizimini to`gri baholash', videos: 9 },
        { id: 124, title: 'O`quvchilar bilan chiqiship ketish', videos: 7 },
        { id: 114, title: 'Darsni intizomda olip o`tirish', videos: 5 },
        { id: 164, title: 'Jurnalni to`ldirish', videos: 6 },
        { id: 174, title: 'O`qituvchini faoliyati', videos: 4 },
      ]
    },
    {
      id: 2849,
      profession: { id: 5, title: 'Cleaner', img: clean },
      deskiription: 'A cleaner or a cleaning operative is a type of industrial or domestic worker who cleans homes or commercial premises for payment. Cleaning operatives may specialise in cleaning particular things or places, such as window cleaners. Cleaning operatives often work when the people who otherwise occupy the space are not around. They may clean offices at night or houses during the workday.',
      sections: [
        { id: 155, title: 'Tez tozalash', videos: 5 },
        { id: 145, title: 'Tozaliga etibor berish', videos: 2 },
        { id: 135, title: 'Voqtida tozalash', videos: 9 },
        { id: 125, title: 'Farroshning faoliyati', videos: 7 },
      ]
    },
    {
      id: 22846,
      profession: { id: 6, title: 'Cook', img: cook },
      deskiription: 'AGA cooker – a heat storage stove and cooker, which works on the principle that a heavy frame made from cast iron components can absorb heat from a relatively low-intensity but continuously-burning source, and the accumulated heat can then be used when needed for cooking. Originally heated by slow-burning coal, the Aga cooker was invented in 1922 by the Nobel Prize-winning Swedish physicist Gustaf Dalén (1869–1937), who was employed first as the chief engineer of the Swedish AGA company.',
      sections: [
        { id: 156, title: 'Idish tavoqlarni saramjon ushlash', videos: 5 },
        { id: 146, title: 'Mazzali taom tayyorlash', videos: 2 },
        { id: 136, title: 'Voqtida Taomni etkazip berish', videos: 9 },
        { id: 126, title: 'Taomni ozoda pishirish', videos: 7 },
        { id: 116, title: 'Mazasiga etibor berish', videos: 5 },
        { id: 166, title: 'Maxsulotlarni sifatini ushlash', videos: 6 },
        { id: 186, title: 'Oshpazning  faoliyati', videos: 8 },
      ]
    },
    {
      id: 2234846,
      profession: { id: 7, title: 'Security', img: secure },
      deskiription: 'Security is protection from, or resilience against, potential harm (or other unwanted coercive change) caused by others, by restraining the freedom of others to act. Beneficiaries (technically referents) of security may be of persons and social groups, objects and institutions, ecosystems or any other entity or phenomenon vulnerable to unwanted change.',
      sections: [
        { id: 157, title: 'Kompaniyada mas`uliyat bilan ishlash', videos: 5 },
        { id: 147, title: 'Kelgangan mijozni tog`ri tevshirish', videos: 2 },
        { id: 137, title: 'Taqiqlangan moddalar haqida', videos: 9 },
        { id: 127, title: 'Kandek odamlarni kiritmaslik', videos: 7 },
        { id: 117, title: 'Yahshi muomala kilish', videos: 5 },
      ]
    },
    {
      id: 223234846,
      profession: { id: 8, title: 'Administrator', img: admin },
      deskiription: 'Also known as office administrators or office managers, administrators support office operations and leadership by keeping workspaces and information organized and accessible. They handle planning and clerical activities such as answering phones; updating employee, client, and company data; filing; and keeping a clean, welcoming environment.',
      sections: [
        { id: 158, title: 'Kompaniyani boshqarish', videos: 5 },
        { id: 148, title: 'Ishchini to`gri tartibda koshish', videos: 2 },
        { id: 138, title: 'Mijozlarni sorovlariga javoblar', videos: 9 },
        { id: 128, title: 'Ishchilarni teqshirish', videos: 7 },
        { id: 118, title: 'Yangliklar oylab topish', videos: 5 },
      ]
    }
  ]);

  const [lessons, setLessons] = useState([
    // Director lessons

    // birinchi darsga
    {
      id: 9873,
      profession: { id: 1, title: 'Director', img: boss },
      section: { id: 15, title: 'Assosiy director vazifasi', videos: 5 },
      is_completed: false,
      yt_video: "TlQurWxetqw",
      title: "Kompaniyani boshqarish"
    },
    {
      id: 98732,
      profession: { id: 1, title: 'Director', img: boss },
      section: { id: 15, title: 'Assosiy director vazifasi', videos: 5 },
      is_completed: false,
      yt_video: "TlQurWxetqw",
      title: "Boshqa kompaniyalar bilan ishlash"

    },
    {
      id: 98733,
      profession: { id: 1, title: 'Director', img: boss },
      section: { id: 15, title: 'Assosiy director vazifasi', videos: 5 },
      is_completed: false,
      yt_video: "TlQurWxetqw",

      title: "Ishchilarni oylikgini togri chikarish"

    },
    {
      id: 98735,
      profession: { id: 1, title: 'Director', img: boss },
      section: { id: 15, title: 'Assosiy director vazifasi', videos: 5 },
      is_completed: false,
      yt_video: "TlQurWxetqw",

      title: "Yangiliklar kiritish"
    },

    // birinchi darsga

    // ikkinchi darsga
    {
      id: 98736,
      profession: { id: 1, title: 'Director', img: boss },
      section: { id: 14, title: 'Ishchilar bilan muloka', videos: 2 },
      is_completed: false,
      yt_video: "TlQurWxetqw",
      title: "Ishchilar bilan muomila haqida"
    },
    {
      id: 98737,

      profession: { id: 1, title: 'Director', img: boss },
      section: { id: 14, title: 'Ishchilar bilan muloka', videos: 2 },
      is_completed: false,
      yt_video: "TlQurWxetqw",
      title: "Oy`lik va avans berish haqida"
    },
    // ikkinchi darsga


    // uchinchi darsga
    {
      id: 987301,
      profession: { id: 1, title: 'Director', img: boss },
      section: { id: 13, title: 'Boshqa kompaniyalar bilan ishlash', videos: 9 },
      is_completed: false,
      yt_video: "TlQurWxetqw",
      title: "Lesson 1"
    },
    {
      id: 987302,
      profession: { id: 1, title: 'Director', img: boss },
      section: { id: 13, title: 'Boshqa kompaniyalar bilan ishlash', videos: 9 },
      is_completed: false,
      yt_video: "TlQurWxetqw",
      title: "Lesson 2"
    },
    {
      id: 987303,
      profession: { id: 1, title: 'Director', img: boss },
      section: { id: 13, title: 'Boshqa kompaniyalar bilan ishlash', videos: 9 },
      is_completed: false,
      yt_video: "TlQurWxetqw",
      title: "Lesson 3"
    },
    {
      id: 987304,
      profession: { id: 1, title: 'Director', img: boss },
      section: { id: 13, title: 'Boshqa kompaniyalar bilan ishlash', videos: 9 },
      title: "Lesson 4",
      is_completed: false,
      yt_video: "TlQurWxetqw",
    },
    {
      id: 987305,
      profession: { id: 1, title: 'Director', img: boss },
      section: { id: 13, title: 'Boshqa kompaniyalar bilan ishlash', videos: 9 },
      title: "Lesson 5",
      is_completed: false,
      yt_video: "TlQurWxetqw",
    },
    {
      id: 987306,
      profession: { id: 1, title: 'Director', img: boss },
      section: { id: 13, title: 'Boshqa kompaniyalar bilan ishlash', videos: 9 },
      title: "Lesson 6",
      is_completed: false,
      yt_video: "TlQurWxetqw",
    },
    // Uchunchi darsga


    // Tor`tinchi darsga
    {
      id: 987311,
      profession: { id: 1, title: 'Director', img: boss },
      section: { id: 12, title: 'To`gri yigilishlar otkazish', videos: 4 },
      is_completed: false,
      yt_video: "TlQurWxetqw",
      title: "Lesson 1"
    },
    {
      id: 987312,

      profession: { id: 1, title: 'Director', img: boss },
      section: { id: 12, title: 'To`gri yigilishlar otkazish', videos: 4 },
      is_completed: false,
      yt_video: "TlQurWxetqw",
      title: "Lesson 2"
    },
    {
      id: 987313,

      profession: { id: 1, title: 'Director', img: boss },
      section: { id: 12, title: 'To`gri yigilishlar otkazish', videos: 4 },
      is_completed: false,
      yt_video: "TlQurWxetqw",
      title: "Lesson 3"
    },
    {
      id: 987314,

      profession: { id: 1, title: 'Director', img: boss },
      section: { id: 12, title: 'To`gri yigilishlar otkazish', videos: 4 },
      is_completed: false,
      yt_video: "TlQurWxetqw",
      title: "Lesson 4"
    },
    // Tor`tinchi darsga


    // Beshinchi darsga
    {
      id: 987321,
      profession: { id: 1, title: 'Director', img: boss },
      section: { id: 11, title: 'Yigilishga assosiy mavzular', videos: 6 },
      is_completed: false,
      yt_video: "TlQurWxetqw",
      title: "Lesson 1"
    },
    {
      id: 987322,
      profession: { id: 1, title: 'Director', img: boss },
      section: { id: 11, title: 'Yigilishga assosiy mavzular', videos: 6 },
      is_completed: false,
      yt_video: "TlQurWxetqw",
      title: "Lesson 2"
    },
    {
      id: 987323,
      profession: { id: 1, title: 'Director', img: boss },
      section: { id: 11, title: 'Yigilishga assosiy mavzular', videos: 6 },
      is_completed: false,
      yt_video: "TlQurWxetqw",
      title: "Lesson 3"
    },
    {
      id: 987324,
      profession: { id: 1, title: 'Director', img: boss },
      section: { id: 11, title: 'Yigilishga assosiy mavzular', videos: 6 },
      is_completed: false,
      yt_video: "TlQurWxetqw",
      title: "Lesson 4"
    },
    {
      id: 987325,
      profession: { id: 1, title: 'Director', img: boss },
      section: { id: 11, title: 'Yigilishga assosiy mavzular', videos: 6 },
      is_completed: false,
      yt_video: "TlQurWxetqw",
      title: "Lesson 5"
    },
    // Beshinchi darsga


    // 6 darsga
    {
      id: 987331,
      profession: { id: 1, title: 'Director', img: boss },
      section: { id: 16, title: 'Kompaniyani to`gri boshqarish', videos: 3 },
      is_completed: false,
      yt_video: "TlQurWxetqw",
      title: "Lesson 1"
    },
    {
      id: 987332,

      profession: { id: 1, title: 'Director', img: boss },
      section: { id: 16, title: 'Kompaniyani to`gri boshqarish', videos: 3 },
      is_completed: false,
      yt_video: "TlQurWxetqw",
      title: "Lesson 2"
    },
    {
      id: 987333,

      profession: { id: 1, title: 'Director', img: boss },
      section: { id: 16, title: 'Kompaniyani to`gri boshqarish', videos: 3 },
      is_completed: false,
      yt_video: "TlQurWxetqw",
      title: "Lesson 3"
    },
    // 6 darsga


    // 7 darsga
    {
      id: 987340,
      profession: { id: 1, title: 'Director', img: boss },
      section: { id: 18, title: 'Kompaniyaga etibor berish', videos: 1 },
      is_completed: false,
      yt_video: "TlQurWxetqw",
      title: "Lesson 1"
    },
    // 7 darsga

    // Director lessons

    // Mananger lessons

    // Birinchi darsga

    {
      id: 98744,
      profession: { id: 2, title: 'Manager', img: mananger },
      section: { id: 152, title: 'Mijoz bilan Ishlash', videos: 5 },
      is_completed: false,
      yt_video: "TlQurWxetqw",
      title: "Mijoz nimani talab kilyabti?"
    },
    {
      id: 98745,
      profession: { id: 2, title: 'Manager', img: mananger },
      section: { id: 152, title: 'Mijoz bilan Ishlash', videos: 5 },
      is_completed: false,
      yt_video: "TlQurWxetqw",
      title: "Mijozni talablarini togri bajarish"
    },
    {
      id: 98746,
      profession: { id: 2, title: 'Manager', img: mananger },
      section: { id: 152, title: 'Mijoz bilan Ishlash', videos: 5 },
      is_completed: false,
      yt_video: "TlQurWxetqw",
      title: "Mijozga togri xizmatarni tushintirish"
    },
    {
      id: 98747,
      profession: { id: 2, title: 'Manager', img: mananger },
      section: { id: 152, title: 'Mijoz bilan Ishlash', videos: 5 },
      is_completed: false,
      yt_video: "TlQurWxetqw",
      title: "Mijozni qiziqtirish haqida"
    },
    {
      id: 98748,
      profession: { id: 2, title: 'Manager', img: mananger },
      section: { id: 152, title: 'Mijoz bilan Ishlash', videos: 5 },
      is_completed: false,
      yt_video: "TlQurWxetqw",
      title: "Mijozga yahshi muloqat kilish"
    },
    // Birinchi darsga

    // Ikkinchi darsga
    {
      id: 98750,
      profession: {id:2, title:"Manager,", img: mananger},
      section: { id: 142, title: 'Kompaniyada to`gri ish olib borish', videos: 2 },
      is_completed: false,
      yt_video: "TlQurWxetqw",
      title: "Kompaniya xizmatlarini togri yurutish"
    },
    {
      id: 98751,
      profession: {id:2, title:"Manager,", img: mananger},
      section: { id: 142, title: 'Kompaniyada to`gri ish olib borish', videos: 2 },
      is_completed: false,
      yt_video: "TlQurWxetqw",
      title: "Oz kabinetiga etiborliq bolish"
    },
    // Ikkinchi darsga

    // Uchinchi darsga
    {
      id: 98760,
      profession: { id: 2, title: 'Manager', img: mananger },
      section: { id: 132, title: 'Mijoz bilan to`gri kelishish', videos: 4 },
      is_completed: false,
      yt_video: "TlQurWxetqw",
      title: "Mijozga kereklik narsalarni tushuntirish"
    },
    {
      id: 98761,
      profession: { id: 2, title: 'Manager', img: mananger },
      section: { id: 132, title: 'Mijoz bilan to`gri kelishish', videos: 4 },
      is_completed: false,
      yt_video: "TlQurWxetqw",
      title: "Oz vaktida finansni hal qilish"
    },
    {
      id: 98762,
      profession: { id: 2, title: 'Manager', img: mananger },
      section: { id: 132, title: 'Mijoz bilan to`gri kelishish', videos: 4 },
      is_completed: false,
      yt_video: "TlQurWxetqw",
      title: "Mijozlarga togri chegirmalar kilish"
    },
    {
      id: 98763,
      profession: { id: 2, title: 'Manager', img: mananger },
      section: { id: 132, title: 'Mijoz bilan to`gri kelishish', videos: 4 },
      is_completed: false,
      yt_video: "TlQurWxetqw",
      title: "Talablarini togri tushinish"
    },
    // Uchinchi darsga

    // To`rtinchi darsga
    {
      id: 98770,
      profession: { id: 2, title: 'Manager', img: mananger },
      section: {  id: 112, title: 'Yangi loyihalar', videos: 5 },
      is_completed: false,
      yt_video: "SII_yypvkxs",
      title: "Kompaniyaga foydali yangi loyihalar"
    },
    {
      id: 98771,
      profession: { id: 2, title: 'Manager', img: mananger },
      section: {  id: 112, title: 'Yangi loyihalar', videos: 5 },
      is_completed: false,
      yt_video: "SII_yypvkxs",
      title: "Yangi loyihalardi to`gri reklama kilish"
    },
    {
      id: 98772,
      profession: { id: 2, title: 'Manager', img: mananger },
      section: {  id: 112, title: 'Yangi loyihalar', videos: 5 },
      is_completed: false,
      yt_video: "SII_yypvkxs",
      title: "Yangi loyihalardi to`gri sotish"
    },
    {
      id: 98773,
      profession: { id: 2, title: 'Manager', img: mananger },
      section: {  id: 112, title: 'Yangi loyihalar', videos: 5 },
      is_completed: false,
      yt_video: "SII_yypvkxs",
      title: "Yangi tizimlar oylab topish"
    },
    {
      id: 98774,
      profession: { id: 2, title: 'Manager', img: mananger },
      section: {  id: 112, title: 'Yangi loyihalar', videos: 5 },
      is_completed: false,
      yt_video: "SII_yypvkxs",
      title: "Yangi loyihalardi to`gri nazorat qilish"
    },

    // Mananger lessons
    {
      id: 9875,
      profession: { id: 3, title: 'SMM Manager', img: smm },
      section: { id: 153, title: 'Mijoz bilan onlineda Ishlash', videos: 5 },
      is_completed: false,
      yt_video: "TlQurWxetqw",
      title: "Mijoz`ga kanday ishlash qulay"

    },
    {
      id: 9876,
      profession: { id: 4, title: 'Teacher', img: teacher },
      section: { id: 154, title: 'Darsga voqtida kirish', videos: 5 },
      is_completed: false,
      yt_video: "TlQurWxetqw",
      title: "Dars`ga kanday etibor berish?"

    },
    {
      id: 9877,
      profession: { id: 5, title: 'Cleaner', img: clean },
      section: { id: 155, title: 'Tez tozalash', videos: 6 },
      is_completed: false,
      yt_video: "TlQurWxetqw",
      title: "Kanday ish kilish kerak?"

    },
    {
      id: 9878,
      profession: { id: 6, title: 'Cook', img: cook },
      section: { id: 146, title: 'Mazzali taom tayyorlash', videos: 2 },
      is_completed: false,
      yt_video: "TlQurWxetqw",
      title: "Kanday ovkat pishirish kerak?"

    },
    {
      id: 9879,
      profession: { id: 7, title: 'Security', img: secure },
      section: { id: 147, title: 'Kelgangan mijozni tog`ri tevshirish', videos: 5 },
      is_completed: false,
      yt_video: "TlQurWxetqw",
      title: "Kaysi asboblar bilan teqshish lozim?"

    },
    {
      id: 9880,
      profession: { id: 8, title: 'Administrator', img: admin },
      section: { id: 158, title: 'Kompaniyani boshqarish', videos: 5 },
      is_completed: false,
      yt_video: "TlQurWxetqw",
      title: "Kanday kilib borshqarsa qulayro?"

    },
  ])

  return (
    <div>
      <ProviderContext value={{
        professions,
        setProfessions,
        sections,
        setSections,
        lessons,
        setLessons,
      }}>
        <Router>
          <NavbarC />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/profession" element={<Profession />}></Route>
            <Route path="/course/:id" element={<Course />}></Route>
            <Route path="/sections/:id" element={<Section />}></Route>
            <Route path="/services" element={<Service />}></Route>
            <Route path="/aboutUs" element={<AboutUs />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
          </Routes>
        </Router>
      </ProviderContext>
    </div>
  );
}

export default App;
