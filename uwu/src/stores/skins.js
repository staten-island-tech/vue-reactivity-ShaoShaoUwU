import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCart = defineStore('cart', () => {
  const cart = ref([])
  return {cart}
})

export const useSkins = defineStore('destinations', () => {
     const destinations =[
    {
        SkinName:"Spellthief Lux",
        Price: "950",
        MyOpinion:"My Opinion: 2.5/10",
        img:"https://prod.api.assets.riotgames.com/public/v1/asset/lol/13.21.1/CHAMPION_SKIN/99002/SPLASH?width=1920&height=1080&format=auto&auto=webp",
        rank: ["rare", "all"],
    },
    {
        SkinName:"Cosmic Lux",
        Price: "1820",
        MyOpinion:"My Opinion: 10/10",
        img:"https://cdn.vox-cdn.com/thumbor/ed2zWSfZLSG39pzV7F6bupQ8-NQ=/0x0:1831x1080/1200x800/filters:focal(688x111:980x403)/cdn.vox-cdn.com/uploads/chorus_image/image/66427477/Lux_Splash_11.0.jpg",
        rank:["legendary", "all"],
    },
    {
        SkinName:"Dark Cosmic Lux",
        Price: "1820",
        MyOpinion:"My Opinion: 9.2/10",
        img:"https://media.discordapp.net/attachments/771842479644737556/1156340082945577000/vqh3500gzhk41.png?ex=656f949f&is=655d1f9f&hm=4fefd9e7922f1f18a835b4cf71df665a1f10e8392636120ee57ef04ff8a557da&=&format=webp&quality=lossless&width=596&height=352",
        rank:["legendary", "all"],
    },
    {
        SkinName:"Elementalist Lux",
        Price: "325P",
        MyOpinion:"My Opinion: 10/10",
        img:"https://cdn.vox-cdn.com/thumbor/scwQrFv4w8QhRn5i0lhedZWn-rs=/0x0:1280x755/1200x800/filters:focal(538x276:742x480)/cdn.vox-cdn.com/uploads/chorus_image/image/52034985/elementalistlu.0.jpeg",
        rank:["ultimate", "all"],
    },
    {
        SkinName:"Soul Fighter Lux",
        Price: "1350",
        MyOpinion:"My Opinion: 7.4/10",
        img:"https://media.discordapp.net/attachments/771842479644737556/1156339780666269706/aufoyc6q2l8b1.png?ex=656f9457&is=655d1f57&hm=d6d9d3d232412f5d005fb6f215631d6c279fa1b33d3e7e865e09617ae157637c&=&format=webp&quality=lossless&width=596&height=335",
        rank:["epic", "all"],
    },
    {
        SkinName:"Star Guardian Lux",
        Price: "1350",
        MyOpinion:"My Opinion: 6.5/10",
        img:"https://images.contentstack.io/v3/assets/blt187521ff0727be24/blt4deb96de5ea056c8/60ee1256fdc6795ca58484fe/lux-splash.jpg",
        rank:["epic", "all"],
    },
    {
        SkinName:"Steel Legion Lux",
        Price: "950",
        MyOpinion:"My Opinion: 3/10",
        img:"https://4.bp.blogspot.com/-VBecPxYVhAE/UQBYrIIaxQI/AAAAAAAAA3E/j6JN1Rakrq4/s1600/Lux_Splash_5.jpg",
        rank:["rare", "all"],
    },
    {
        SkinName:"Pajama Guardian Lux",
        Price: "1350",
        MyOpinion:"My Opinion: 7/10",
        img:"https://2.bp.blogspot.com/-Zl8EN1yHYWk/W-TM-dwUDSI/AAAAAAABK3k/LMjVSG-waXshOkhPQH0zqdu1sP_NQ4VjgCLcBGAs/s1600/21017.jpg",
        rank:["epic", "all"],
    },
    {
        SkinName:"Battle Academia Lux",
        Price: "1350",
        MyOpinion:"My Opinion: 5/10",
        img:"https://cdna.artstation.com/p/assets/images/images/017/834/664/large/chengwei-pan-1.jpg?1557501323",
        rank:["epic", "all"],
    },
    {
        SkinName:"Prestige Battle Academia Lux",
        Price: "2000",
        MyOpinion:"My Opinion: 9.5/10",
        img:"https://64.media.tumblr.com/e00878c364b6443df287276ad7d78ba9/d5d63bbce180df42-c7/s1280x1920/96a71a9675e702b1567ac1fa98fb8bc1506c4e65.jpg",
        rank:["mythic", "all"],
    },
    {
        SkinName:"Prestige Porcelain Lux",
        Price: "1500",
        MyOpinion:"My Opinion: 4/10",
        img:"https://pbs.twimg.com/media/FIWeTbOVEAI_AGp?format=jpg&name=4096x4096",
        rank:["mythic", "all"],
    },
    {
        SkinName:"Porcelain Lux",
        Price: "1350",
        MyOpinion:"My Opinion: 5.5/10",
        img:"https://pbs.twimg.com/media/FIWeSnUVUAIgeq0?format=jpg&name=4096x4096",
        rank:["epic", "all"],
    },
    ]
})
