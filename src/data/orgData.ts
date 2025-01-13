import abil from "../assets/img/members/Abil.webp"
import adut from "../assets/img/members/Adut.webp"
import ale from "../assets/img/members/Ale.webp"
import ardi from "../assets/img/members/Ardi.webp"
import arida from "../assets/img/members/Arida.webp"
import au from "../assets/img/members/Au.webp"
import bontot from "../assets/img/members/Bontot.webp"
import bubble from "../assets/img/members/Bubble.webp"
import chika from "../assets/img/members/Ciciw.webp"
import dewan from "../assets/img/members/Dewan.webp"
import didit from "../assets/img/members/Didit.webp"
import diyas from "../assets/img/members/Diyas.webp"
import elvin from "../assets/img/members/Elvin.webp"
import ezi from "../assets/img/members/Ezi.webp"
import kokok from "../assets/img/members/Kokok.webp"
import marsel from "../assets/img/members/Marsel.webp"
import mbul from "../assets/img/members/Mbul.webp"
import nana from "../assets/img/members/Nana.webp"
import nanas from "../assets/img/members/Nanas.webp"
import pew from "../assets/img/members/Pew.webp"
import qilla from "../assets/img/members/Qilla.webp"
import ripal from "../assets/img/members/Ripal.webp"
import risma from "../assets/img/members/Rizm.webp"
import rus from "../assets/img/members/Rus.webp"
import tia from "../assets/img/members/Tia.webp"



export interface Member {
    id: number;
    name: string;
    nickname?: string;
    position: string;
    photo: string;
    bio: string;
  }
  
  export interface OrgData {
    id: number;
    name: string;
    position: string;
    bio: string;
    photo: string;
    members?: Member[];
  }
  
  export const orgData: OrgData[] = [
    {
      id: 1,
      name: "Ripaldi Aditya",
      position: "CEO",
      photo: ripal,
      bio: "CEO of Muve Label",
    },
    {
      id: 2,
      name: "Puji Shabiela",
      position: "Vice President",
      photo: abil,
      bio: "VP of Muve Label",
    },
    {
      id: 3,
      name: "Muhamad Rustandi",
      position: "General Manager",
      photo: rus,
      bio: "GM of Muve Label",
    },
    {
      id: 4,
      name: "Aqilla Asnurianti Dewi",
      position: "Secretary",
      photo: qilla,
      bio: "Secretary of Muve Label",
    },
    {
      id: 5,
      name: "Muhammad Ardiansyah",
      position: "Production Leader",
      photo: ardi,
      bio: "Leader of Production",
      members: [
        {
          id: 12,
          nickname: "Ilham",
          name: "Muhammad Ilham Nursidiq",
          position: "Production Team Member",
          photo: "/path/to/member1.jpg",
          bio: "Production team member",
        },
        {
          id: 13,
          nickname: "Didit",
          name: "Didit Supriyadi",
          position: "Production Team Member",
          photo: didit,
          bio: "Production team member",
        },
        {
          id: 14,
          nickname: "Fauzi",
          name: "Moch. Fauzi Dwi R.",
          position: "Production Team Member",
          photo: ezi,
          bio: "Production team member",
        },
        {
          id: 15,
          nickname: "Nazwa",
          name: "Nur Nazwali",
          position: "Production Team Member",
          photo: "/path/to/member4.jpg",
          bio: "Production team member",
        },
        {
          id: 16,
          nickname: "Aliyya",
          name: "Aliyya Rachmat Putri",
          position: "Production Team Member",
          photo: "/path/to/member5.jpg",
          bio: "Production team member",
        },
      ],
    },
    {
      id: 6,
      name: "Raihan Angga Arifin",
      position: "Marketing Leader",
      photo: adut,
      bio: "Leader of Marketing",
      members: [
        {
          id: 17,
          nickname: "Ricky",
          name: "Ricky Mediansyah",
          position: "Marketing Team Member",
          photo: bubble,
          bio: "Marketing team member",
        },
        {
          id: 18,
          nickname: "Tia",
          name: "Ananda Tia Nurhayati",
          position: "Marketing Team Member",
          photo: tia,
          bio: "Marketing team member",
        },
      ],
    },
    {
      id: 7,
      name: "Fauriza Prameswari Gunadi P.",
      position: "Finance Leader",
      photo: au,
      bio: "Leader of Finance",
      members: [
        {
          id: 19,
          nickname: "Chika",
          name: "Chika Cantika",
          position: "Finance Team Member",
          photo: chika,
          bio: "Finance team member",
        },
      ],
    },{
        id: 8,
        name: "Adinda Rizqita Fauziyah",
        position: "Talent Management Leader",
        photo: mbul,
        bio: "Leader of Talent Management",
        members: [
          {
            id: 20,
            nickname: "Thalia",
            name: "Thalia Adha Winandi",
            position: "Talent Management Member",
            photo: "/path/to/member9.jpg",
            bio: "Talent Management team member",
          },
          {
            id: 21,
            nickname: "Marchel",
            name: "Mochammad Marchel Mufariz S.",
            position: "Talent Management Member",
            photo: marsel,
            bio: "Talent Management team member",
          },
          {
            id: 22,
            nickname: "Adinda",
            name: "Adinda Agustin",
            position: "Talent Management Member",
            photo: bontot,
            bio: "Talent Management team member",
          },
          {
            id: 23,
            nickname: "Puspita",
            name: "Puspita Negara",
            position: "Talent Management Member",
            photo: "/path/to/member12.jpg",
            bio: "Talent Management team member",
          },
          {
            id: 24,
            nickname: "Risma",
            name: "Risma Apriliani",
            position: "Talent Management Member",
            photo: risma,
            bio: "Talent Management team member",
          },
          {
            id: 25,
            nickname: "Liana",
            name: "Liana Nur Apriliani",
            position: "Talent Management Member",
            photo: "/path/to/member14.jpg",
            bio: "Talent Management team member",
          },
        ],
      },
      {
        id: 9,
        name: "Alya Rahma Kamila",
        position: "Media & PR Leader",
        photo: ale,
        bio: "Leader of Media and Public Relations",
        members: [
          {
            id: 26,
            nickname: "Rama",
            name: "Rama Fauzal",
            position: "Media & PR Team Member",
            photo: pew,
            bio: "Media & PR team member",
          },
          {
            id: 27,
            nickname: "Adelia",
            name: "Adelia Nabila Azzahra",
            position: "Media & PR Team Member",
            photo: nana,
            bio: "Media & PR team member",
          },
          {
            id: 28,
            nickname: "Diyas",
            name: "Diyas Armelia Putri",
            position: "Media & PR Team Member",
            photo: diyas,
            bio: "Media & PR team member",
          },
        ],
      },
      {
        id: 10,
        name: "Wildan Maulana",
        position: "Creative Leader",
        photo: "/path/to/photo10.jpg",
        bio: "Leader of Creative",
        members: [
          {
            id: 29,
            nickname: "Arida",
            name: "Arida Rahmalia",
            position: "Creative team member",
            photo: arida,
            bio: "Creative team member",
          },
          {
            id: 30,
            nickname: "Rizky",
            name: "Rizky Maulana",
            position: "Creative team member",
            photo: kokok,
            bio: "Creative team member",
          },
          {
            id: 31,
            nickname: "Nasri",
            name: "Nasri Azizah",
            position: "Creative team member",
            photo: nanas,
            bio: "Creative team member",
          },
          {
            id: 32,
            nickname: "Nazwa",
            name: "Nazwa Syabilla Az’zahra Violeta",
            position: "Creative team member",
            photo: "/path/to/member21.jpg",
            bio: "Creative team member",
          },
          {
            id: 33,
            nickname: "Rahmalla",
            name: "Rahmalla Chalistha Adiwijaya",
            position: "Creative team member",
            photo: "/path/to/member22.jpg",
            bio: "Creative team member",
          },
        ],
      },
      {
        id: 11,
        name: "Elvin Ferdian",
        position: "Business Development Leader",
        photo: elvin,
        bio: "Leader of Business Development",
        members: [
          {
            id: 34,
            nickname: "Dewan",
            name: "Dede Irawan",
            position: "Business Development Team Member",
            photo: dewan,
            bio: "Business Development team member",
          },
          {
            id: 35,
            nickname: "Ana",
            name: "Ana Tri Lestari",
            position: "Business Development Team Member",
            photo: "/path/to/member24.jpg",
            bio: "Business Development team member",
          },
        ],
      },
    ];
  