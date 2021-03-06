/*
Base Ori : Lexxy Official
*/

const {
WAConnection,
MessageType,
Presence,
MessageOptions,
Mimetype,
WALocationMessage,
WA_MESSAGE_STUB_TYPES,
WA_DEFAULT_EPHEMERAL,
ReconnectMode,
ProxyAgent,
GroupSettingChange,
waChatKey,
mentionedJid,
processTime,
} = require('@adiwajshing/baileys')
const fs = require('fs')
const hx = require('hxz-api')
const axios = require("axios")
const yts = require('yt-search')
const crypto = require('crypto')  
const request = require('request')
const ffmpeg = require('fluent-ffmpeg')
const speed = require('performance-now')
const moment = require('moment-timezone')

//❑─━─━─━─━─━─━─━─━─━❑ LIB ❑─━─━─━─━─━─━─━─━─━❑

const { uploadimg, upload } = require('./lib/uploadimg')
const { color, bgcolor } = require('./lib/color')
const { mediafireDl } = require('./lib/mediafire.js')
const { fetchJson, fetchText } = require('./lib/fetcher')
const { y2mateA, y2mateV } = require('./lib/y2mate')
const { exec, spawn, execSync } = require('child_process')
const { yta, ytv, buffer2Stream, ytsr, baseURI, stream2Buffer, noop } = require('./lib/ytdl')
const { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const { ind } = require('./recode')

//❑─━─━─━─━─━─━─━─━─━❑ DATABASE ❑─━─━─━─━─━─━─━─━─━❑

const setting = JSON.parse(fs.readFileSync('./setting.json'))
const ban = JSON.parse(fs.readFileSync('./database/banned.json'))
const scommand = JSON.parse(fs.readFileSync("./database/scommand.json"));
const prem = JSON.parse(fs.readFileSync('./database/premium.json'))
const pendaftar = JSON.parse(fs.readFileSync('./database/pendaftar.json'))
const antilink = JSON.parse(fs.readFileSync('./database/antilink.json'))

//❑─━─━─━─━─━─━─━─━─━❑ GAMBAR ❑─━─━─━─━─━─━─━─━─━❑

img1 = fs.readFileSync('./gambar/thumb.jpg')
img2 = fs.readFileSync('./gambar/fake.jpg')

//MODE
publik = true

//Di Bagian Sini Jangan Di Ubah
//Kalo Mau Ganti di setting.json
zeksApi = setting.ZEKSKEY
fakeyoi = ["NekoChan"]
const simbol = setting.SIMBOLNYA
const botName = setting.BotName
const owner = setting.OwnerNumber
const ownerName = setting.OwnerName
pe = 'https://instagram.com/zadani?utm_medium=copy_'

//Kalo Error Sc nya Fix Sendiri 
//Udah Di Bilangin Jangan Di Ganti

//=================( PEMBATASAN )=================//

function kyun(seconds){
function pad(s){
return (s < 10 ? '0' : '') + s;
}
var hours = Math.floor(seconds / (60*60));
var minutes = Math.floor(seconds % (60*60) / 60);
var seconds = Math.floor(seconds % 60);
return `${pad(hours)}JAM ${pad(minutes)}MENIT ${pad(seconds)}DETIK`

}
const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')  
 if(time2 < "23:59:00"){
var ucapanWaktu = 'Good night??'
 }
 if(time2 < "19:00:00"){
var ucapanWaktu = 'Good afternoon'
 }
 if(time2 < "18:00:00"){
var ucapanWaktu = 'Good afternoon'
 }
 if(time2 < "15:00:00"){
var ucapanWaktu = 'Good afternoon'
 }
 if(time2 < "11:00:00"){
var ucapanWaktu = 'Good morning'
 }
 if(time2 < "05:00:00"){
var ucapanWaktu = 'Good Night'
 } 
  
//=================( PEMBATAS )=================//
const addCmd = (id, command) => {
    const obj = { id: id, chats: command }
    scommand.push(obj)
    fs.writeFileSync('./database/scommand.json', JSON.stringify(scommand))
}
const getCommandPosition = (id) => {
    let position = null
    Object.keys(scommand).forEach((i) => {
        if (scommand[i].id === id) {
            position = i
        }
    })
    if (position !== null) {
        return position
    }
}
const getCmd = (id) => {

  let position = null;
  Object.keys(scommand).forEach((i) => {
    if (scommand[i].id === id) {
      position = i;
    }
  });
  if (position !== null) {
    return scommand[position].chats;
  }
};  

module.exports = Neko = async (Neko, mek) => {
try {
if (!mek.hasNewMessage) return
mek = mek.messages.all()[0]
if (!mek.message) return
if (mek.key && mek.key.remoteJid == 'status@broadcast') return
if (mek.key.fromMe) return
global.prefix
global.blocked
mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
const content = JSON.stringify(mek.message)
const from = mek.key.remoteJid
const type = Object.keys(mek.message)[0]
const { text, extendedText, contact, groupInviteMessage, buttonsMessage, location, liveLocation, image, video, sticker, document, audio, product, quotedMsg } = MessageType
const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
const wib = moment.tz('Asia/Jakarta').format('HH:mm:ss')
const wita = moment.tz('Asia/Makassar').format("HH:mm:ss")
const wit = moment.tz('Asia/Jayapura').format("HH:mm:ss")
const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
const prefix = /^[簞?Ａ繩?繞??Ｔ瞼簧??=|~!#$%^&.?/\\穢^z+*@,;]/.test(cmd) ? cmd.match(/^[簞?Ａ繩?繞??Ｔ瞼簧??=|~!#$%^&.?/\\穢^z+*,;]/gi) : '-'          	
body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'videoMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'extendedTextMessage') && mek.message[type].text.startsWith(prefix) ? mek.message[type].text : (type == 'listResponseMessage') && mek.message[type].singleSelectReply.selectedRowId ? mek.message[type].singleSelectReply.selectedRowId : (type == 'buttonsResponseMessage') && mek.message[type].selectedButtonId ? mek.message[type].selectedButtonId : (type == 'stickerMessage') && (getCmd(mek.message[type].fileSha256.toString('base64')) !== null && getCmd(mek.message[type].fileSha256.toString('base64')) !== undefined) ? getCmd(mek.message[type].fileSha256.toString('base64')) : ""
budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
const args = body.trim().split(/ +/).slice(1)
const isCmd = body.startsWith(prefix)
const ownerNumber = [`${owner}@s.whatsapp.net`]
const q = args.join(' ')
const c = args.join(' ')
const botNumber = Neko.user.jid
const botNumberss = Neko.user.jid + '@c.us'
const isGroup = from.endsWith('@g.us')
let sender = isGroup ? mek.participant : mek.key.remoteJid
const isOwner = ownerNumber.includes(sender)
const totalchat = await Neko.chats.all()
const groupMetadata = isGroup ? await Neko.groupMetadata(from) : ''
const groupName = isGroup ? groupMetadata.subject : ''
const groupId = isGroup ? groupMetadata.jid : ''
const groupMembers = isGroup ? groupMetadata.participants : ''
const groupDesc = isGroup ? groupMetadata.desc : ''
const groupOwner = isGroup ? groupMetadata.owner : ''
const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
const isGroupAdmins = groupAdmins.includes(sender) || false        
const isAntilink = isGroup ? antilink.includes(from) : false
const conts = mek.key.fromMe ? Neko.user.jid : Neko.contacts[sender] || { notify: jid.replace(/@.+/, '') }
const pushname = mek.key.fromMe ? Neko.user.name : conts.notify || conts.vname || conts.name || '-'
const isUser = pendaftar.includes(sender)
const isBanned = ban.includes(sender)
const isPremier = prem.includes(sender)
const totalChat = await Neko.chats.all()
const groups = Neko.chats.array.filter(v => v.jid.endsWith('g.us'))
const privat = Neko.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
const cekcek = randomNomor(100)  

//=================( MESS ONLY )=================//

mess = {
premier: `Fitur ini Khusus User Premium!!\nKalo Mau Jadi User Premium\nSilahkan Chat Owner Ku\nWa.me/${owner}`,
wait: 'Tunggu Sebentar',
wrongFormat: 'Format salah, coba liat lagi di menu',
success: 'Success',
error: {
stick: 'Cannot access videos!',
lv: 'Invalid link!',
api: 'Error'
},
only: {
group: 'Hanya Di Group Ngab_-',
owner: 'Khusus Owner Ngab_-'
}
}
const isUrl = (url) => {
return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
}
function randomNomor(angka){
return Math.floor(Math.random() * angka) + 1
}
//=================( REPLY MESSAGE )=================//

const fakeText = (teks) => {
Neko.sendMessage(from, teks, text, {quoted: flexx})
}
const reply = (teks) => {
Neko.sendMessage(from, teks, text, {quoted: mek})
}
const fakethumb = (teks, yes) => {
Neko.sendMessage(from, teks, image, {thumbnail:fs.readFileSync('./gambar/fake.jpg'),quoted:mek,caption:yes})
}      
const sendMess = (hehe, teks) => {
Neko.sendMessage(hehe, teks, text)
}

const mentions = (teks, memberr, id) => {
(id == null || id == undefined || id == false) ? Neko.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : Neko.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": memberr } })
}            
if (budy.includes("https://chat.whatsapp.com/")) {
if (!isGroup) return
if (!isAntilink) return
if (isGroupAdmins) return reply("admin bebas aowkwkww")
var kic = `${sender.split("@")[0]}@s.whatsapp.net`
reply(` *「 GROUP LINK DETECTOR 」*\nKamu mengirimkan link grup chat, maaf kamu di kick dari grup :(`)
setTimeout(() => {
Neko.groupRemove(from, [kic]).catch((e) => { reply(`BOT HARUS JADI ADMIN`) })
}, 0)
}          
if (budy.includes(`suki`)) {
Neko.sendMessage(from, 'why are you gay?', text, {quoted: mek})
                  }
if (budy.includes(`anak kecil`)) {
Neko.sendMessage(from, 'si pedo berulah', text, {quoted: mek})
                  }
if (budy.includes(`loli`)) {
pedo = fs.readFileSync('./pedo.opus')
Neko.sendMessage(from, pedo, audio, {quoted: mek})
                  }
                  if (budy.includes(`Assalamu'alaikum`)) {
Neko.sendMessage(from, 'waalaikumsalam', text, {quoted: mek})
                  }
//=================( FAKE )=================//

//FAKE VN
const fvn = {
key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},message: { "audioMessage": {"mimetype":"audio/ogg; codecs=opus","seconds": "9999999","ptt": "true"}}}
//FAKE TEXT
const ftext = {
key: {fromMe: true ,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},message: { "extendedTextMessage": {"text": `${fakeyoi}`,"title": `Hmm`,'jpegThumbnail': fs.readFileSync('./gambar/fake.jpg')}}}
//FAKE VIDEO
const flexx = {
key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {}) },message: { "videoMessage": { "title":"hallo bang","h": `Hmm`,'seconds': '-99999', 'caption': `${fakeyoi}`,'jpegThumbnail': fs.readFileSync('./gambar/fake.jpg')}}}
//FAKE GRUP
const fgc = {
key: {"fromMe": false,"participant": "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "62895619083555-1616169743@g.us","inviteCode": "mememteeeekkeke","groupName": "P", "caption": `${fakeyoi}`, 'jpegThumbnail': fs.readFileSync('./gambar/fake.jpg')}}}
//FAKE IG
const fakeyt = (teks) => {
Neko.sendMessage(from, teks, text,{contextInfo :{text: 'hi',
"forwardingScore": 1000000000,
isForwarded: false,
sendEphemeral: false,
"externalAdReply": {
                "title": `${ucapanWaktu}`,
                "body": `DON'T CLICK`,
                "mediaType": "10",
                "mediaUrl": `${pe}`,
                "thumbnailUrl": "https://telegra.ph/file/4120daf1a177658bfe117.jpg",
                "thumbnail": img1,
                "sourceUrl": `${pe}`,
},mentionedJid:[sender]}, quoted : mek})
};
//=================( SEND KONTAK )=================//

const sendKontak = (from, nomor, nama, org = "") => {
const vcard =
"BEGIN:VCARD\n" +
"VERSION:3.0\n" +
"FN:" +
nama +
"\n" +
"ORG:" +
org +
"\n" +
"TEL;type=CELL;type=VOICE;waid=" +
nomor +
":+" +
nomor +
"\n" +
"END:VCARD";
Neko.sendMessage(
from,
{ displayname: nama, vcard: vcard },
MessageType.contact,
{ quoted: mek }
);
};            
    
//=================( BUTTON )=================//
const sendButMessage = (id, text1, desc1, but = [], options = {}) => {
const buttonMessage = {
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 1
}
Neko.sendMessage(id, buttonMessage, MessageType.buttonsMessage, options)
}

const sendButton = async (from, context, fortext, but, mek) => {
buttonMessages = {
contentText: context,
footerText: fortext,
buttons: but,
headerType: 1
}
Neko.sendMessage(from, buttonMessages, buttonsMessage, {
quoted: mek
})
}
const sendButImage = async (from, context, fortext, img, but, mek) => {
jadinya = await Neko.prepareMessage(from, img, image)
buttonMessagesI = {
imageMessage: jadinya.message.imageMessage,
contentText: context,
footerText: fortext,
buttons: but,
headerType: 4
}
Neko.sendMessage(from, buttonMessagesI, buttonsMessage, {
quoted: mek,
})
}
async function sendButLoc(id, text1, desc1, gam1, but = [], options = {}) {
let buttonMessages = { locationMessage: { jpegThumbnail: gam1 }, contentText: text1, footerText: desc1, buttons: but, headerType: 6 }
return Neko.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}            

//=================( STICKER )=================//

const sticOwner = (hehe) => {
ano = fs.readFileSync('./lib/sticker/owner.webp')
Neko.sendMessage(hehe, ano, sticker, { quoted: mek})
}
const sticWait = (hehe) => {
ano = fs.readFileSync('./lib/sticker/wait.webp')
Neko.sendMessage(hehe, ano, sticker, { quoted: mek})
}
const sticLoad = (hehe) => {
ano = fs.readFileSync('./lib/sticker/loading.webp')
Neko.sendMessage(hehe, ano, sticker, { quoted: mek})
}
const sticGroup = (hehe) => {
ano = fs.readFileSync('./lib/sticker/group.webp')
Neko.sendMessage(hehe, ano, sticker, { quoted: mek})
}
const sticBotAdmin = (hehe) => {
ano = fs.readFileSync('./lib/sticker/botadmin.webp')
Neko.sendMessage(hehe, ano, sticker, { quoted: mek})
}
const sticBanned = (hehe) => {
ano = fs.readFileSync('./lib/sticker/banned.webp')
Neko.sendMessage(hehe, ano, sticker, { quoted: mek})
}
const sticAdmin = (hehe) => {
ano = fs.readFileSync('./lib/sticker/admin.webp')
Neko.sendMessage(hehe, ano, sticker, { quoted: mek})
}


//=================( MEDIA URL )=================//
function _0x1f8a(){var _0x3b0963=['Mau\x20Beli\x20Sc\x20Bot\x20?\x0aWa.me/6285789004732\x0aWa.me/6282279915237\x0a\x0aHarga:\x2015k-30k\x0aFull\x20Pengajaran\x20✓\x0aBebas\x20Recode\x20✓\x0aNo\x20Enc\x20100%\x20✓\x0aBisa\x20Request\x20Fitur\x20✓','5783876aPdIUc','450194LtiikH','2400255WCaikZ','1040GouifO','1690328vFoDVX','12116hJnXyP','29910SlhvcX','860340rvKgqZ'];_0x1f8a=function(){return _0x3b0963;};return _0x1f8a();}var _0x35a8ef=_0x5f17;function _0x5f17(_0xd5618f,_0x5064d8){var _0x1f8a64=_0x1f8a();return _0x5f17=function(_0x5f17cb,_0x4941ea){_0x5f17cb=_0x5f17cb-0x91;var _0x2fbc52=_0x1f8a64[_0x5f17cb];return _0x2fbc52;},_0x5f17(_0xd5618f,_0x5064d8);}(function(_0x1710c1,_0x5ba38f){var _0x3a070d=_0x5f17,_0x3a537f=_0x1710c1();while(!![]){try{var _0x2a229c=-parseInt(_0x3a070d(0x91))/0x1+-parseInt(_0x3a070d(0x96))/0x2+parseInt(_0x3a070d(0x92))/0x3+parseInt(_0x3a070d(0x95))/0x4*(-parseInt(_0x3a070d(0x93))/0x5)+parseInt(_0x3a070d(0x97))/0x6+parseInt(_0x3a070d(0x99))/0x7+-parseInt(_0x3a070d(0x94))/0x8;if(_0x2a229c===_0x5ba38f)break;else _0x3a537f['push'](_0x3a537f['shift']());}catch(_0x2c922c){_0x3a537f['push'](_0x3a537f['shift']());}}}(_0x1f8a,0x711a7),scb=[_0x35a8ef(0x98)]);
var _0x20e665=_0x314c;function _0x314c(_0x37cd58,_0x3a521e){var _0x4b8e56=_0x4b8e();return _0x314c=function(_0x314c41,_0x4eaac2){_0x314c41=_0x314c41-0xaa;var _0x55af95=_0x4b8e56[_0x314c41];return _0x55af95;},_0x314c(_0x37cd58,_0x3a521e);}function _0x4b8e(){var _0x27123e=['243376EBlSHk','258900wIOfcY','114TWcRlj','10096209DvrdPy','753669vUkCXH','8VkgSua','https://youtube.com/c/LEX4YOUU','2002557RpuVza','8153257ApajrE','98158NObccs'];_0x4b8e=function(){return _0x27123e;};return _0x4b8e();}(function(_0x594d1e,_0x15ed1c){var _0x4e0b23=_0x314c,_0x878f3d=_0x594d1e();while(!![]){try{var _0x149281=-parseInt(_0x4e0b23(0xb1))/0x1+-parseInt(_0x4e0b23(0xac))/0x2+parseInt(_0x4e0b23(0xaa))/0x3+-parseInt(_0x4e0b23(0xad))/0x4+-parseInt(_0x4e0b23(0xae))/0x5*(-parseInt(_0x4e0b23(0xaf))/0x6)+-parseInt(_0x4e0b23(0xab))/0x7+-parseInt(_0x4e0b23(0xb2))/0x8*(-parseInt(_0x4e0b23(0xb0))/0x9);if(_0x149281===_0x15ed1c)break;else _0x878f3d['push'](_0x878f3d['shift']());}catch(_0x594fb9){_0x878f3d['push'](_0x878f3d['shift']());}}}(_0x4b8e,0xb5d5d),linkyt=[_0x20e665(0xb3)]);
function _0x7d02(_0x172c43,_0x2efc01){var _0x475ee4=_0x475e();return _0x7d02=function(_0x7d026d,_0x238c6d){_0x7d026d=_0x7d026d-0xf8;var _0xdba5d2=_0x475ee4[_0x7d026d];return _0xdba5d2;},_0x7d02(_0x172c43,_0x2efc01);}function _0x475e(){var _0x38e6d2=['7KFrBYl','566vbLPoG','2185605jwxDBW','4833jNGgmR','656YKzcRx','24472360alBtlI','10272344ajtBCv','2672eOHLSC','━➤\x20「\x20𝙄𝙉𝙁𝙊\x20𝘿𝙀𝙑\x20」\x0a✍️\x20𝙎𝙘𝙧𝙞𝙥𝙩\x20𝙈𝙖𝙙𝙚\x20𝙞𝙣\x20𝘽𝙮\x20𝙇𝙚𝙭𝙭𝙮\x20𝙊𝙛𝙛𝙞𝙘𝙞𝙖𝙡\x0a🌟\x20𝙑𝙚𝙧𝙨𝙞𝙤𝙣\x20:\x2010.0\x0a📈\x20𝙇𝙖𝙨𝙩\x20𝙐𝙥𝙙𝙖𝙩𝙚\x20:\x201.0\x0a📃\x20𝙇𝙞𝙣𝙠\x20𝙎𝙘\x20:\x20https://youtu.be/DN42naRJ6FE\x0a\x0a📦\x20𝙂𝙧𝙤𝙪𝙥\x201\x20:\x0ahttps://chat.whatsapp.com/IQdenO0L2R0AgXWoWzssit\x0a📦\x20𝙂𝙧𝙤𝙪𝙥\x202\x20:\x0ahttps://chat.whatsapp.com/CNwZkO2NhV76sP6NCX6i8A\x0a\x0a🌐\x20𝙔𝙤𝙪𝙩𝙪𝙗𝙚\x20:\x0ahttps://youtube.com/c/LEX4YOUU\x0a\x0a𝑺𝒖𝒃𝒔𝒄𝒓𝒊𝒃𝒆\x20𝑭𝒐𝒓\x20𝑵𝒆𝒘\x20𝑼𝒑𝒅𝒂𝒕𝒆!','72UjGwJy','6435354Inhdaf','1724280XwCNVZ'];_0x475e=function(){return _0x38e6d2;};return _0x475e();}var _0x488feb=_0x7d02;(function(_0x40179c,_0x1edf3f){var _0x2eab61=_0x7d02,_0x1a3f75=_0x40179c();while(!![]){try{var _0xb5ec52=-parseInt(_0x2eab61(0x101))/0x1*(-parseInt(_0x2eab61(0xfb))/0x2)+-parseInt(_0x2eab61(0x103))/0x3*(-parseInt(_0x2eab61(0xf8))/0x4)+parseInt(_0x2eab61(0x102))/0x5+-parseInt(_0x2eab61(0xfe))/0x6+parseInt(_0x2eab61(0x100))/0x7*(parseInt(_0x2eab61(0xfa))/0x8)+-parseInt(_0x2eab61(0xfd))/0x9*(-parseInt(_0x2eab61(0xff))/0xa)+-parseInt(_0x2eab61(0xf9))/0xb;if(_0xb5ec52===_0x1edf3f)break;else _0x1a3f75['push'](_0x1a3f75['shift']());}catch(_0x1c4cb1){_0x1a3f75['push'](_0x1a3f75['shift']());}}}(_0x475e,0xc9161),dev=[_0x488feb(0xfc)]);

const sendStickerFromUrl = async(to, url) => {
var names = Date.now() / 10000;
var download = function (uri, filename, callback) {
request.head(uri, function (err, res, body) {
request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
download(url, './stik' + names + '.png', async function () {
console.log('selesai');
let filess = './stik' + names + '.png'
let asw = './stik' + names + '.webp'
exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
let media = fs.readFileSync(asw)
Neko.sendMessage(to, media, MessageType.sticker,{quoted:mek})
fs.unlinkSync(filess)
fs.unlinkSync(asw)
});
});
}
const sendFileFromUrl = async(link, type, options) => {
hasil = await getBuffer(link)
Neko.sendMessage(from, hasil, type, options).catch(e => {
fetch(link).then((hasil) => {
Neko.sendMessage(from, hasil, type, options).catch(e => {
Neko.sendMessage(from, { url : link }, type, options).catch(e => {
reply('_[ ! ] Error Gagal Dalam Mendownload Dan Mengirim Media_')
console.log(e)
})
})
})
})
}            
const sendMediaURL = async(to, url, text="", mids=[]) =>{
if(mids.length > 0){
text = normalizeMention(to, text, mids)
}
const fn = Date.now() / 10000;
const filename = fn.toString()
let mime = ""
var download = function (uri, filename, callback) {
request.head(uri, function (err, res, body) {
mime = res.headers['content-type']
request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
download(url, filename, async function () {
console.log('done');
let media = fs.readFileSync(filename)
let type = mime.split("/")[0]+"Message"
if(mime === "image/gif"){
type = MessageType.video
mime = Mimetype.gif
}
if(mime.split("/")[0] === "audio"){
mime = Mimetype.mp4Audio
}
Neko.sendMessage(to, media, type, { quoted: mek, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
fs.unlinkSync(filename)
});
}

//=================( USER )=================//
   
if (isCmd && !isUser){
pendaftar.push(sender)
fs.writeFileSync('./database/pendaftar.json', JSON.stringify(pendaftar, null, 2))
}
        
//=================( CONECTION )=================//

colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
const isMedia = (type === 'imageMessage' || type === 'videoMessage')
const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))

if (!publik) {
if (!isOwner && !mek.key.fromMe) return
}

Neko.chatRead(from, "read")

//=================( CASE & MENU )=================//

switch (command) {
case 'menu':
if (isBanned)return sticBanned(from)
uwu = '```'
        		var ra2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
			 status = await Neko.getStatus(`${sender.split('@')[0]}@c.us`)
				status = status.status == 401 ? '' : status.status
menu1 =`
┌───❏ 𝙐𝙨𝙚𝙧 ❏
│❖𝙉𝙖𝙢𝙖: _*${pushname}*_
│❖𝘽𝙞𝙤: _*${status}*_
│❖𝙉𝙤𝙢𝙤𝙧: _*@${sender.split("@")[0]}*_
│❖𝙎𝙩𝙖𝙩𝙪𝙨: _*${isOwner? "Owner👑️":"User⚔️"}*_
│❖𝙋𝙧𝙚𝙢𝙞𝙪𝙢: _*${isPremier? "Aktif ✔":"Tidak ✘"}*_
└──────━╴

┌───❏ 𝙄𝙣𝙛𝙤 𝘽𝙤𝙩 ❏
│❖𝙉𝙖𝙢𝙚: _*${botName}*_
│❖𝙊𝙬𝙣𝙚𝙧: _*${ownerName}*_
│❖𝘽𝙖𝙩𝙧𝙚: 9999999%
│❖𝙂𝙧𝙤𝙪𝙥: ⌞ *${groups.length}* ⌝
│❖𝙋𝙧𝙞𝙫𝙖𝙩: ⌞ *${groups.length}* ⌝
└──────━╴

━━━━❏ 𝙇𝙞𝙨𝙩 𝙈𝙚𝙣𝙪 ❏━━━━

┌❏ 𝙊𝙩𝙝𝙚𝙧 𝙈𝙚𝙣𝙪 
│⌬${prefix}𝚛𝚎𝚚𝚞𝚎𝚜𝚝
│⌬${prefix}𝚕𝚊𝚙𝚘𝚛
│⌬${prefix}𝚝𝚎𝚜 
│⌬${prefix}𝚘𝚠𝚗𝚎𝚛
│⌬${prefix}𝚝𝚎𝚡𝚝𝚒𝚖𝚐
│⌬${prefix}𝚛𝚊𝚝𝚎
│⌬${prefix}𝚝𝚘𝚞𝚛𝚕
│⌬${prefix}𝚜𝚜𝚠𝚎𝚋
└──────━╴

┌❑ 𝙂𝙧𝙤𝙪𝙥 𝙈𝙚𝙣𝙪
│⌬${prefix}𝚑𝚒𝚍𝚎𝚝𝚊𝚐
│⌬${prefix}𝚝𝚊𝚐𝚊𝚕𝚕
│⌬${prefix}𝚕𝚒𝚜𝚝𝚊𝚍𝚖𝚒𝚗
│⌬${prefix}𝚊𝚗𝚝𝚒𝚕𝚒𝚗𝚔
│⌬${prefix}𝚌𝚕𝚘𝚜𝚎𝚐𝚌
│⌬${prefix}𝚘𝚙𝚎𝚗𝚐𝚌
│⌬${prefix}𝚕𝚒𝚗𝚔𝚐𝚌
│⌬${prefix}𝚜𝚎𝚝𝚙𝚙
│⌬${prefix}𝚊𝚍𝚍
│⌬${prefix}𝚔𝚒𝚌𝚔
│⌬${prefix}𝚕𝚎𝚊𝚟𝚎
│⌬${prefix}𝚙𝚛𝚘𝚖𝚘𝚝𝚎
│⌬${prefix}𝚍𝚎𝚖𝚘𝚝𝚎
│⌬${prefix}𝚍𝚎𝚕
└──────━╴

┌❏ 𝘼𝙣𝙞𝙢𝙚 𝙈𝙚𝙣𝙪
│⌬${prefix}𝚊𝚗𝚒𝚖𝚎
│⌬${prefix}𝚙𝚙𝚌𝚙
│⌬${prefix}𝚗𝚎𝚔𝚘               
│⌬${prefix}𝚠𝚊𝚒𝚏𝚞
│⌬${prefix}𝚜𝚑𝚘𝚝𝚊
└──────━╴

┌❏ 𝙌𝙪𝙤𝙩𝙚𝙨 𝙈𝙚𝙣𝙪
│⌬${prefix}𝚚𝚞𝚘𝚝𝚎𝚜𝚐𝚊𝚕𝚊𝚞
│⌬${prefix}𝚚𝚞𝚘𝚝𝚎𝚜𝚋𝚞𝚌𝚒𝚗
└──────━╴

┌❏ 𝙁𝙪𝙣 𝙈𝙚𝙣𝙪
│⌬${prefix}𝚊𝚙𝚊𝚔𝚊𝚑
└──────━╴

┌❏ 𝙈𝙖𝙠𝙚𝙧 𝙈𝙚𝙣𝙪
│⌬${prefix}𝚐𝚕𝚞𝚎
│⌬${prefix}1917
│⌬${prefix}3𝚍𝚌𝚛𝚊𝚌𝚔
│⌬${prefix}3𝚍𝚞𝚗𝚍𝚎𝚛𝚠𝚊𝚝𝚎𝚛
│⌬${prefix}3𝚍𝚠𝚘𝚘𝚍
│⌬${prefix}3𝚍𝚠𝚘𝚘𝚍2
│⌬${prefix}3𝚍𝚊𝚖𝚎𝚛𝚒𝚌𝚊𝚗𝚏𝚕𝚊𝚐
│⌬${prefix}3𝚍𝚐𝚊𝚕𝚊𝚡𝚢𝚖𝚎𝚝𝚊𝚕
│⌬${prefix}3𝚍𝚐𝚘𝚕𝚍
│⌬${prefix}3𝚍𝚐𝚛𝚊𝚍𝚒𝚎𝚗𝚝
│⌬${prefix}
└──────━╴

┌❏ 𝙊𝙬𝙣𝙚𝙧 𝙈𝙚𝙣𝙪
│⌬${prefix}𝚜𝚎𝚝𝚛𝚎𝚙𝚕𝚢
│⌬${prefix}𝚜𝚎𝚝𝚏𝚊𝚔𝚎
│⌬${prefix}𝚜𝚎𝚝𝚝𝚑𝚞𝚖𝚋
│⌬${prefix}𝚋𝚊𝚗
│⌬${prefix}𝚞𝚗𝚋𝚊𝚗
│⌬${prefix}𝚊𝚍𝚍𝚙𝚛𝚎𝚖
│⌬${prefix}𝚍𝚎𝚕𝚙𝚛𝚎𝚖
│⌬${prefix}𝚊𝚍𝚍𝚌𝚖𝚍
│⌬${prefix}𝚍𝚎𝚕𝚌𝚖𝚍
│⌬${prefix}𝚕𝚒𝚜𝚝𝚌𝚖𝚍
│⌬${prefix}𝚋𝚛𝚘𝚊𝚍𝚌𝚊𝚜𝚝
│⌬${prefix}𝚙𝚞𝚋𝚕𝚒𝚌
│⌬${prefix}𝚜𝚎𝚕𝚏
└──────━╴

┌❏ 𝙎𝙩𝙞𝙘𝙠𝙚𝙧 𝙈𝙚𝙣𝙪
│⌬${prefix}𝚜𝚝𝚒𝚌𝚔𝚎𝚛
│⌬${prefix}𝚙𝚊𝚝𝚛𝚒𝚌𝚔
│⌬${prefix}𝚐𝚞𝚛𝚊𝚜𝚝𝚒𝚌𝚔
│⌬${prefix}𝚝𝚘𝚒𝚖𝚐
└──────━╴

┌❏ 𝙎𝙚𝙖𝙧𝙘𝙝 𝙈𝙚𝙣𝙪 
│⌬${prefix}𝚒𝚖𝚐𝚜𝚎𝚊𝚛𝚌𝚑
│⌬${prefix}𝚢𝚝𝚜𝚎𝚊𝚛𝚌𝚑
│⌬${prefix}𝚙𝚒𝚗𝚝𝚎𝚛𝚎𝚜𝚝
│⌬${prefix}𝚜𝚎𝚊𝚛𝚌𝚑𝚐𝚛𝚞𝚙
└──────━╴

┌❏ 𝘿𝙤𝙬𝙣𝙡𝙤𝙖𝙙 𝙈𝙚𝙣𝙪
│⌬${prefix}𝚖𝚎𝚍𝚒𝚊𝚏𝚒𝚛𝚎
│⌬${prefix}𝚢𝚝𝚖𝚙3
│⌬${prefix}𝚢𝚝𝚖𝚙4
│⌬${prefix}𝚝𝚒𝚔𝚝𝚘𝚔𝚗𝚘𝚠𝚖
└──────━╴`
menu2 =` © Create By NekoBotz`
but = [
{ buttonId: `${prefix}owner`, buttonText: { displayText: '️ᴏᴡɴᴇʀ' }, type: 1 }
]
vn = fs.readFileSync('./oniichan.opus')
sendButLoc(from, menu1, menu2, img1, but)
Neko.sendMessage(from, vn, audio, {quoted: fgc})
break
//━━━━━━━━━━━━━━━━━━━━━━━☢ GROUP MENU ☢━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━//
case 'hidetag':              
if (!isGroup) return sticGroup(from)
if (!isGroupAdmins) return sticAdmin(from)
var value = body.slice(9)
var group = await Neko.groupMetadata(from)
var member = group['participants']
var mem = []
member.map( async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
var options = {
text: value,
contextInfo: { mentionedJid: mem },
quoted: mek
}
Neko.sendMessage(from, options, text)
break

case 'tagall':
if (!isGroup) return sticGroup(from)
if (!isGroupAdmins) return sticAdmin(from)
members_id = []
teks = (args.length > 1) ? body.slice(8).trim() : ''
teks += '\n\n'
for (let mem of groupMembers) {
teks += `*#* @${mem.jid.split('@')[0]}\n`
members_id.push(mem.jid)
}
mentions(teks, members_id, true)
break

case 'setpp': 
if (!isGroup) return sticGroup(from)
if (!isGroupAdmins) return sticAdmin(from)
if (!isBotGroupAdmins) return sticBotAdmin(from)
media = await Neko.downloadAndSaveMediaMessage(mek)
await Neko.updateProfilePicture(from, media)
reply('*Sukses mengganti icon group*')
break


case 'linkgc':
case 'linkgrup':
case 'linkgroup':
if (!isGroup) return sticGroup(from)
if (!isGroupAdmins) sticAdmin(from)
if (!isBotGroupAdmins) sticBotAdmin(from)
linkgc = await Neko.groupInviteCode(from)
reply('https://chat.whatsapp.com/'+linkgc)
break


case 'delete':
case 'del':
case 'd':
if (!isGroup) return sticGroup(from)
if (!isGroupAdmins) return sticAdmin(from)
Neko.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
break


case 'leave':
if (!isGroup) return sticGroup(from)
if (isGroupAdmins || isOwner) {
Neko.groupLeave(from)
} else {
sticAdmin(from)
}
break


case 'listadmin':
if (!isGroup) return sticGroup(from)
teks = `List admin of group *${groupMetadata.subject}*\nTotal : ${groupAdmins.length}\n\n`
no = 0
for (let admon of groupAdmins) {
no += 1
teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
}
mentions(teks, groupAdmins, true)
break


case 'demote':
if (!isGroup) return sticGroup(from)
if (!isGroupAdmins) return sticAdmin(from)
if (!isBotGroupAdmins) return sticBotAdmin(from)
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('𝗧𝗮𝗴 𝘁𝗮𝗿𝗴𝗲𝘁 𝘆𝗮??𝗴 𝗶𝗻𝗴𝗶𝗻 𝗱𝗶 𝘁𝗲𝗻𝗱𝗮𝗻𝗴!')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = ''
for (let _ of mentioned) {
teks += `*jabatan kamu di copot*🏃 :\n`
teks += `@_.split('@')[0]`
	}
mentions(teks, mentioned, true)
Neko.groupDemoteAdmin(from, mentioned)
} else {
mentions(`Yahh @${mentioned[0].split('@')[0]} Jabatan kamu sebagai leluhur di grup telah di copot🏃`, mentioned, true)
Neko.groupDemoteAdmin(from, mentioned)
}
break
case 'promote':
if (!isGroup) return sticGroup(from)
if (!isGroupAdmins) return sticAdmin(from)
if (!isBotGroupAdmins) return sticBotAdmin(from)
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('𝗧𝗮𝗴 ??𝗮??𝗴??𝘁 𝘆𝗮??𝗴 𝗶𝗻𝗴𝗶𝗻 𝗱𝗶 𝘁𝗲𝗻𝗱𝗮𝗻𝗴!')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = ''
for (let _ of mentioned) {
teks += `Yeee🥳 Kamu naik jabatan >_< :\n`
teks += `@_.split('@')[0]`
}
mentions(teks, mentioned, true)
Neko.groupMakeAdmin(from, mentioned)
} else {
mentions(`Selamat🥳 @${mentioned[0].split('@')[0]} *anda naik menjadi admin group* >_<`, mentioned, true)
Neko.groupMakeAdmin(from, mentioned)
}
break

case 'add':
if (!isGroup) return sticGroup(from)
if (!isGroupAdmins) return sticAdmin(from)
if (!isBotGroupAdmins) return sticBotAdmin(from)
if (args.length < 1) return reply('Yang mau di add jin ya?')
if (args[0].startsWith('08')) return reply('Gunakan kode negara mas')
try {
num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
Neko.groupAdd(from, [num])
} catch (e) {
console.log('Error :', e)
reply('Gagal menambahkan target, mungkin karena di private')
}
break


case 'kick':
if (!isGroup) return sticGroup(from)
if (!isGroupAdmins) return sticAdmin(from)
if (!isBotGroupAdmins) return sticBotAdmin(from)
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di tendang!')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = 'Perintah di terima, mengeluarkan :\n'
for (let _ of mentioned) {
teks += `@${mentioned[0].split('@')[0]}\n`
}
mentions(teks, mentioned, true)
Neko.groupRemove(from, mentioned)
} else {
mentions(`Perintah di terima, mengeluarkan : @${mentioned[0].split('@')[0]}`, mentioned, true)
Neko.groupRemove(from, mentioned)
}
break

case 'antilink':
if (!isGroup) return sticGroup(from)
if (!isGroupAdmins) return sticAdmin(from)
if (!isBotGroupAdmins) return sticBotAdmin(from)
if (Number(args[0]) === 1) {
if (isAntilink) return reply('Anti link group sudah aktif')
antilink.push(from)
fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
reply('Sukses mengaktifkan anti link group di group ini ✔️')
Neko.sendMessage(from,`Perhatian kepada seluruh member anti link group aktif apabila anda mengirim link group anda akan di kick dari group`, text)
} else if (Number(args[0]) === 0) {
if (!isAntilink) return reply('Mode anti link group sudah disable')
antilinkgrup.splice(from, 1)
fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
reply('Sukes menonaktifkan anti link group di group ini ✔️')
} else {
sendButton(from, `MODE ANTILINK`, `Silahkan pilih salah satu`, [
{buttonId: `${prefix}antilink 1`,buttonText: {displayText: `ON`,},type: 1,},
{buttonId: `${prefix}antilink 0`,buttonText: {displayText: `OFF`,},type: 1,},
]
);
}
break;

case "closegc": 
if (!mek.key.fromMe && !isGroupAdmins) return sticAdmin(from)
if (!isBotGroupAdmins) return sticBotAdmin(from);
if (!isGroup) return sticGroup(from);
reply(`*GROUP BERHASIL DI TUTUP ADMIN ${pushname}*`);
Neko.groupSettingChange(from, GroupSettingChange.messageSend, true);
break; 


case "opengc":
if (!mek.key.fromMe && !isGroupAdmins) return sticAdmin(from)
if (!isBotGroupAdmins) return sticBotAdmin(from);
if (!isGroup) return sticGroup(from);
reply(`*GROUP BERHASIL DI BUKA ADMIN ${pushname}*`);
Neko.groupSettingChange(from, GroupSettingChange.messageSend, false);
break; 
//━━━━━━━━━━━━━━━━━━━━━━━━━━☢ STICKER MENU ☢━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━//
case 'sticker':
case 's':
if (isBanned)return sticBanned(from)
sticWait(from)
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
const media = await Neko.downloadAndSaveMediaMessage(encmedia)
ran = '666.webp'
await ffmpeg(`./${media}`)
.input(media)
.on('start', function (cmd) {
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
reply('error')
})
.on('end', function () {
Neko.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
fs.unlinkSync(media)
fs.unlinkSync(ran)
})
.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(ran)
} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
const media = await Neko.downloadAndSaveMediaMessage(encmedia)
ran = '999.webp'
sticWait(from)
await ffmpeg(`./${media}`)
.inputFormat(media.split('.')[1])
.on('start', function (cmd) {
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
tipe = media.endsWith('.mp4') ? 'video' : 'gif'
reply(`Gagal, pada saat mengkonversi ${tipe} ke stiker`)
})
.on('end', function () {
Neko.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: flexx})
fs.unlinkSync(media)
fs.unlinkSync(ran)
})
.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(ran)
} else {
reply(`Please send a picture or reply to an image with the caption ${prefix}sticker`)
}
break


case 'patrick':
sticWait(from)
			random = Math.floor(Math.random() * 6) + 1
		    wkwk = await getBuffer(`https://api.lolhuman.xyz/api/sticker/patrick?apikey=Deffbotz`)
			Neko.sendMessage(from, wkwk, sticker, {quoted: flexx})
			break

case 'gurastick':
sticWait(from)
			random = Math.floor(Math.random() * 6) + 1
		    wkwk = await getBuffer(`https://api.lolhuman.xyz/api/sticker/gawrgura?apikey=Deffbotz`)
			Neko.sendMessage(from, wkwk, sticker, {quoted: mek})
			break

case 'toimg':
if (!isQuotedSticker) return reply('𝗥𝗲𝗽𝗹𝘆/𝘁𝗮𝗴 𝘀𝘁𝗶𝗰𝗸𝗲𝗿 !')
sticWait(from)
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await Neko.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return reply('Yah gagal, coba ulangi ^_^')
buffer = fs.readFileSync(ran)
fakethumb(buffer,'Tuh Kak^_^')
fs.unlinkSync(ran)
})
break
//━━━━━━━━━━━━━━━━━━━━━━━━━━━━☢ SEARCH MENU ☢━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━//
case 'searchgrup':
if (!isPremier)return reply(mess.premier)
if (args.length < 1) return reply(`Nama Group? Contohnya\n${prefix + command} jb`)
hx.linkwa(q)
sticWait(from)
.then(result => {
let res = '*「 _LINK WA_ 」*\n\n'
for (let i of result) {
res += `*Nama*: *${i.nama}\n*Link*: ${i.link}\n\n`
}
reply(res)
});
break


case 'imgsearch':
if (!isPremier)return reply(mess.premier)
if (args.length < 1) return reply('Tolong masukan query!')
let im = await hx.chara(q)
sticWait(from)
let acak = im[Math.floor(Math.random() * im.length)]
let li = await getBuffer(acak)
await Neko.sendMessage(from,li,image,{quoted: mek})           
break


case 'ytsearch':
if (!isPremier)return reply(mess.premier)
if (args.length < 1) return reply('Tolong masukan query!')
var srch = args.join('');
sticWait(from)
try {
var aramas = await yts(srch);
} catch {
return await Neko.sendMessage(from, 'Error!', MessageType.text, dload)
}
aramat = aramas.all 
var tbuff = await getBuffer(aramat[0].image)
var ytresult = '';
ytresult += '「 *YOUTUBE SEARCH* 」'
ytresult += '\n________________________\n\n'
aramas.all.map((video) => {
ytresult += '❏ Title: ' + video.title + '\n'
ytresult += '❏ Link: ' + video.url + '\n'
ytresult += '❏ Durasi: ' + video.timestamp + '\n'
ytresult += '❏ Upload: ' + video.ago + '\n________________________\n\n'
});
ytresult += '◩ *SELF-BOT*'
await fakethumb(tbuff,ytresult)
break


case 'pinterest':
if (isBanned)return sticBanned(from)
if (!isPremier)return reply(mess.premier)
if(!q) return reply(`Namanya? Contohnya\n${prefix + command} naruto`)
let pin = await hx.pinterest(q)
let ac = pin[Math.floor(Math.random() * pin.length)]
let di = await getBuffer(ac)
sticWait(from)
await Neko.sendMessage(from, di, image, { quoted: mek })
break

case 'playstore':
if (isBanned)return sticBanned(from)
if(!c) return reply('*Mau Cari Aplikasi Apa?*')
let play = await hx.playstore(c)
let store = '\n❉─────────────────────❉\n'
for (let i of play){
store += `\n*「 _PLAY STORE_ 」*\n
- *Nama* : ${i.name}
- *Link* : ${i.link}\n
- *Dev* : ${i.developer}
- *Link Dev* : ${i.link_dev}\n❉─────────────────────❉\n\n`
}
reply(store)
break
//━━━━━━━━━━━━━━━━━━━━☢ OWNER MENU ☢━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━//
case 'addcmd': 
case 'setcmd':
if (isBanned) return reply(mess.banned)
if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
if (isQuotedSticker) {
if (!c) return reply(`Penggunaan : ${command} cmdnya dan tag stickernya`)
var kodenya = mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
addCmd(kodenya, c)
reply("Done Bwang")
} else {
reply('tag stickenya')
}
break
case 'delcmd':
if (isBanned) return reply(mess.banned)
if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
if (!isQuotedSticker) return reply(`Penggunaan : ${command} tagsticker`)
var kodenya = mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
scommand.splice(getCommandPosition(kodenya), 1)
fs.writeFileSync('./database/scommand.json', JSON.stringify(scommand))
reply("Done Bwang")
break
case 'listcmd':
if (isBanned) return reply(mess.banned)
if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
let teksnyee = `「 𝙻𝚒𝚜𝚝 𝙲𝚘𝚖𝚖𝚊𝚗𝚍 𝚂𝚝𝚒𝚌𝚔𝚎𝚛 」`
let cemde = [];
for (let i of scommand) {
cemde.push(i.id)
teksnyee += `\n\n*❖𝙸𝙳:* ${i.id}\n*❖𝙲𝚖𝚍:* ${i.chats}`
}
reply(teksnyee)
break



case 'setreply':
if (!isOwner) return sticOwner(from)
if (args.length ==0)return ('Text Reply Nya Mana?')
gg = args.join(" ")
fakeyoi = gg
reply(`Succes Mengganti Conversation Fake : ${q}`)
break


case 'setfake':
if (!isOwner) return sticOwner(from)
if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length == 0) {
boij = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
delb = await Neko.downloadMediaMessage(boij)
fs.writeFileSync(`./gambar/fake.jpg`, delb)
reply('Sukses')
} else {
reply(`Kirim gambar dengan caption ${prefix}setfake`)
}
break	


case 'setthumb':
if (!isOwner) return sticOwner(from)
if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length == 0) {
boij = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
delb = await Neko.downloadMediaMessage(boij)
fs.writeFileSync(`./gambar/thumb.jpg`, delb)
reply('Sukses')
} else {
reply(`Kirim gambar dengan caption ${prefix}setthumb`)
}
break	

case 'ban':
if (!isOwner) return sticOwner(from)
bnnd = body.slice(5)
ban.push(`${bnnd}@s.whatsapp.net`)
fs.writeFileSync('./database/banned.json', JSON.stringify(ban))
fakeText(`*@${bnnd}*\n_Telah Berhasil Dibanned ✓_`)
break


case 'unban':
if (!isOwner) return sticOwner(from)
bnnd = body.slice(7)
ban.splice(`${bnnd}@s.whatsapp.ne5t`)
fs.writeFileSync('./database/banned.json', JSON.stringify(ban))
fakeText(`*@${bnnd}*\n_Telah Sukses Diunbanned ✓_`)
break


case 'addprem':
if (!isOwner) return sticOwner(from)
prmm = body.slice(9)
prem.push(`${prmm}@s.whatsapp.net`)
fs.writeFileSync('./database/premium.json', JSON.stringify(prem))
reply(`*@${prmm}*\n_Berhasil Add User Premium ✓_`)
break


case 'delprem':
if (!isOwner) return sticOwner(from)
prmm = body.slice(9)
prem.splice(`${prmm}@s.whatsapp.ne5t`)
fs.writeFileSync('./database/premium.json', JSON.stringify(prem))
reply(`*@${prmm}*\n_Berhasil Delete User Premium ✓_`)
break

case 'bc':
case 'broadcast':
if (!isOwner) return sticOwner(from)
if (args.length < 1) return reply('teks?')
anu = await Neko.chats.all()
if (isMedia && !mek.message.videoMessage || isQuotedImage) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
bc = await Neko.downloadMediaMessage(encmedia)
for (let _ of anu) {
Neko.sendMessage(_.jid, bc, image, {quoted:freply,caption: `*「 PESAN SIARAN BOT 」*\n\n${body.slice(4)}`})
}
reply('Suksess broadcast')
} else {
for (let _ of anu) {
sendMess(_.jid, `*「 PESAN SIARAN BOT 」*\n\n${body.slice(4)}`)
}
reply('Suksess broadcast')
}
break


case 'public':
if (!isOwner && !mek.key.fromMe) return sticOwner(from)
publik = true
fakeText('*Sukses mengubah mode public*')
break


case 'self':
if (!isOwner && !mek.key.fromMe) return sticOwner(from)
publik = false
fakeText('*Sukses mengubah mode self*')
break
case 'listgc':
case 'gclist':
case 'listgroup':
                case 'listgrup':
                case 'listgrop':
                case 'gruplist':
                case 'groplist':
                case 'grouplist':

  const txs = Neko.chats.all().filter(v => v.jid.endsWith('g.us')).map(v =>`- ${Neko.getName(v.jid)}\n${v.jid}\n[${v.read_only ? 'Left' : 'Joined'}]`).join`\n\n`
  reply(txs)
  break
//━━━━━━━━━━━━━━━━━━━━━☢ DOWNLOAD MENU ☢━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━//
case 'ytmp3':
            if (args.length < 1) return reply('Link Nya Mana ?')
            if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply(mess.error.Iv)
            teks = args.join(' ')
            reply(mess.wait)
            res = await y2mateA(teks).catch(e => {
            reply('_[ ! ] Error Gagal Dalam Memasuki Web Y2mate_')
})
            result = `*YOUTUBE MP3 🎵*

*Data Berhasil Didapatkan !!*
❖ _Title : ${res[0].judul}_
❖ _Type : MP3_
❖ _Size : ${res[0].size}_

\`\`\`Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit\`\`\``

            sendFileFromUrl(res[0].thumb, image, {caption: result, quoted: mek}).then((lalu) => {
            sendFileFromUrl(res[0].link, document, {quoted: mek, mimetype: 'audio/mp3', filename: res[0].output})
})
            break

case 'ytmp4':
            if (args.length < 1) return reply('Link Nya Mana?')
            if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply(mess.error.Iv)
            teks = args.join(' ')
            reply(mess.wait)
            res = await y2mateV(teks).catch(e => {
            reply('_[ ! ] Error Gagal Memasuki Web Y2mate_')
})
            result = `*YOUTUBE MP4 🎥*

*Data Berhasil Didapatkan !!*
❖ _Title : ${res[0].judul}_
❖ _Type : MP4_
❖ _Size : ${res[0].size}_

\`\`\`Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit\`\`\``

            sendFileFromUrl(res[0].thumb, image, {caption: result, quoted: mek}).then((lalu) => {
            sendFileFromUrl(res[0].link, video, {quoted: mek, mimetype: 'video/mp4', filename: res[0].output})
})
            break

case "tiktok":
if (!isPremier)return reply(mess.premier)
if (isBanned)return sticBanned(from)
ttg = fs.readFileSync('./gambar/logo/tiktok.jpg')
res_nya = body.slice(8)
tt1 =`𝘛𝘪𝘬𝘛𝘰𝘬 - 𝘵𝘳𝘦𝘯 𝘥𝘪𝘮𝘶𝘭𝘢𝘪 𝘥𝘪 𝘴𝘪𝘯𝘪. 𝘋𝘪 𝘱𝘦𝘳𝘢𝘯𝘨𝘬𝘢𝘵 𝘢𝘵𝘢𝘶 𝘥𝘪 𝘸𝘦𝘣, 𝘱𝘦𝘯𝘰𝘯𝘵𝘰𝘯 𝘥𝘢𝘱𝘢𝘵 𝘮𝘦𝘯𝘰𝘯𝘵𝘰𝘯 𝘥𝘢𝘯 𝘮𝘦𝘯𝘦𝘮𝘶𝘬𝘢𝘯 𝘫𝘶𝘵𝘢𝘢𝘯 𝘷𝘪𝘥𝘦𝘰 𝘴𝘪𝘯𝘨𝘬𝘢𝘵 𝘺𝘢𝘯𝘨 𝘥𝘪𝘱𝘦𝘳𝘴𝘰𝘯𝘢𝘭𝘪𝘴𝘢𝘴𝘪.`
tt2 =`𝖲𝗂𝗅𝖺𝗁𝗄𝖺𝗇 𝖯𝗂𝗅𝗂𝗁 𝖬𝖾𝖽𝗂𝖺 𝖣𝗂 𝖡𝖺𝗐𝖺𝗁 𝗂𝗇𝗂`
but = [
{ buttonId: `${prefix}tt4 ${res_nya}`, buttonText: { displayText: '️𝘔𝘱4 📽️' }, type: 1 },
{ buttonId: `${prefix}tt3 ${res_nya}`, buttonText: { displayText: '𝘔𝘱3 🎵' }, type: 1 }
]
sendButLoc(from, tt1, tt2, ttg, but)
break

case "tt3":
if (!isPremier)return reply(mess.premier)
if (isBanned)return sticBanned(from)
if (args.length < 1) return reply('Link Nya Mana Kak?')
ini_link = body.slice(5)
sticLoad(from)
anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/tiktok_audio?url=${ini_link}`)
ini = await getBuffer(anu.download)
Neko.sendMessage(from, ini, audio)
break

case "tt4":
if (!isPremier)return reply(mess.premier)
if (isBanned)return sticBanned(from)
if (args.length < 1) return reply('Link Nya Mana Kak?')
ini_link = body.slice(5)
sticLoad(from)
anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/tiktok_nowm?url=${ini_link}`)
ini = await getBuffer(anu.download)
Neko.sendMessage(from, ini, video)
break

case 'mediafire':
if (!isPremier)return reply(mess.premier)
if (isBanned)return sticBanned(from)
md = fs.readFileSync('./gambar/logo/mdfire.jpg')
if (args.length < 1) return reply('Link Nya Mana? ')
if(!isUrl(args[0]) && !args[0].includes('mediafire')) return reply('Linknya Error :v')
sticWait(from)
teks = args.join(' ')
res = await mediafireDl(teks)
result = `*Data Berhasil Didapatkan!*
▢ Nama : ${res[0].nama}
▢ Ukuran : ${res[0].size}
▢ Link : ${res[0].link}

_*Tunggu Proses Upload Media......*_`
Neko.sendMessage(from, md, image, {quoted: flexx, caption: result })
sendFileFromUrl(res[0].link, document, {mimetype: res[0].mime, filename: res[0].nama, quoted: mek})
break

case 'fbdl':
if (isBanned)return sticBanned(from)
if (!isPremier)return reply(mess.premier)
sticWait(from)
url = args.join(' ')
anu = await fetchJson(`https://api.lolhuman.xyz/api/facebook?apikey=Deffbotz&url=${url}`)
buff = await getBuffer(anu.result)
Neko.sendMessage(from, buff, video, {quoted: fgc})
break
//━━━━━━━━━━━━━━━━━━━━━━☢ OTHER MENU ☢━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━//

case 'owner':
sendKontak(from, `${owner}`, `${ownerName}`)
break

case 'tes':
if (isBanned)return sticBanned(from)
fakeText('*STATUS BOT : ONLINE*')
break

case 'request':
case 'rq':
if (isBanned)return sticBanned(from)
if (args.length <1 )return reply(`Mau Request Fitur Apa?\nContohnya :\n${prefix + command} antilink`)
const cfrr = body.slice(8)
if (cfrr.length > 300) return Neko.sendMessage(from, 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks', msgType.text, {quoted: mek})
var nomor = mek.participant
const ress = `*[ REQUEST FITUR ]*\nNomor : @${sender.split("@s.whatsapp.net")[0]}\nPesan : ${cfrr}`
var options = {
text: ress,
contextInfo: {mentionedJid: [nomor]},
}
Neko.sendMessage('62895638102488@s.whatsapp.net', options, text, {quoted: flexx})
reply('REQUEST ANDA TELAH DI TERIMA OWNER, Jika Request Hanya Main² Maka Akan Di Ban Sama Bot.')
break

            case 'tourl':
if (isBanned)return sticBanned(from)
if (!isPremier)return reply(mess.premier)
sticWait(from)
    if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedVideo ) && args.length == 0) {
            boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
            owgi = await Neko.downloadMediaMessage(boij)
            res = await upload(owgi)
            reply(`Url: ${res}`)
            } else {
            reply('kirim/reply gambar/video')
            }
            break        
            
            case 'ssweb2':
            if (isBanned)return sticBanned(from)
if (!isPremier)return reply(mess.premier)
if (args.length ==0)return reply(`Urlnya mana kak? Contoh\n${prefix + command} https://github.com/YuzkiTodz/RikkaBotz`)
teks = args.join(' ')
sticWait(from)
ani = await getBuffer(`https://api.lolhuman.xyz/api/sswebfull?apikey=Deffbotz&url=${teks}`)
Neko.sendMessage(from, ani, image, {quoted: mek, caption: 'Nih Kak'})
break
case 'ssweb':
            if (isBanned)return sticBanned(from)
if (!isPremier)return reply(mess.premier)
if (args.length ==0)return reply(`Urlnya mana kak? Contoh\n${prefix + command} https://github.com/YuzkiTodz/RikkaBotz`)
teks = args.join(' ')
sticWait(from)
ani = await getBuffer(`https://api.lolhuman.xyz/api/ssweb?apikey=Deffbotz&url=${teks}`)
Neko.sendMessage(from, ani, image, {quoted: flexc, caption: 'Nih Kak'})
break
//━━━━━━━━━━━━━━━━━━━━━━☢ FUN MENU ☢━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━//

case 'apakah':
if (isBanned)return sticBanned(from)
query = args.join(' ')
ani = await fetchJson(`https://violetics.pw/api/utility/apakah?apikey=beta&query=${query}`)
txt =`*Pertanyaan:* ${ani.result.query}\n*Jawaban:* ${ani.result.message}`
Neko.sendMessage(from, txt, text, {quoted: mek})
break

case 'rate':
 if (isBanned)return sticBanned(from)
					rate = body.slice(1)
					const ra =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','30','31','32','33','34','35','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const te = ra[Math.floor(Math.random() * ra.length)]
					Neko.sendMessage(from, 'Rate: '+ te+'%', text, { quoted: mek })
					break

//━━━━━━━━━━━━━━━━━━━━━━☢ PLAY MENU ☢━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━//
case 'play':
				 
		 if (!q) return reply('Linknya?')
			 let query = args.join(" ")
			 res = await yts(q)
			   let thumbInfo = ` 
*Youtube Download*
 *🎄Judul :* ${res.all[0].title}
 *🎉ID Video :* ${res.all[0].videoId}
 *🎋Diupload Pada :* ${res.all[0].ago}
 *🗺Views :* ${res.all[0].views}
 *📻Durasi :* ${res.all[0].timestamp}
 *⛽Channel :* ${res.all[0].author.name}
 *🔗Link Video :* ${res.all[0].url}

*Pilih Media Yang Akan Di Download*
`
buttons = [{buttonId:`.ytmp3 ${res.all[0].url}`,buttonText:{displayText:'🎵AUDIO'},type:1},{buttonId:`ytmp4 ${res.all[0].url}`,buttonText:{displayText:'MP4📰'},type:1}]

imageMessage = (await Neko.prepareMessageMedia({url:res.all[0].image},'imageMessage',{thumbnail:Buffer.alloc(0)})).imageMessage

buttonsMessage = {contentText: thumbInfo,footerText:'Silahkan Pilih Jenis File Dibawah Ini',imageMessage,buttons,headerType:4}

prep = await Neko.prepareMessageFromContent(from,{buttonsMessage},{})

Neko.relayWAMessage(prep)
break
case 'play2':
   
if (isMuted) return    
  
				  if (args.length < 1) return reply('*Masukan judul nya?*')
                reply('Loading.... ')
				play = args.join(" ")
				anu = await fetchJson(`https://api.zeks.xyz/api/ytplaymp4?q=${play}&apikey=apivinz`)
				if (anu.error) return reply(anu.error)
				infomp3 = `*「 PLAY VIDEO 」*
				
Judul : ${anu.result.title}
Source : ${anu.result.source}
				
*[Wait] Tunggu Sebentar..*`
				///////buffer = await getBuffer(anu.result.thumbnail)
				buffer1 = await getBuffer(anu.result.url_video)
				Neko.sendMessage(from, buffer1, video, {mimetype: 'video/mp4', filename: `${anu.result.video}.mp4`, quoted: ftrol, caption: 'Nih Gan'})
					break
//━━━━━━━━━━━━━━━━━━━━━━━☢ MARKER MENU ☢━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━//

case 'glue':
if (isBanned)return sticBanned(from)
if (args.length ==0)return reply(`Textnya mana kak? Contoh\n${prefix + command} Tsukasa`)
bo = args.join(' ')
sticWait(from)
tud = await getBuffer(`https://violetics.pw/api/ephoto360/3dglue-realistic?apikey=beta&text=${bo}`)
Neko.sendMessage(from, tud, image, {quoted: fgc, caption: 'Nih Kak Dah Jadi^_^'})
break

case '1917':
if (isBanned)return sticBanned(from)
if (args.length ==0)return reply(`Textnya mana kak? Contoh\n${prefix + command} Tsukasa`)
bo = args.join(' ')
sticWait(from)
anu = await getBuffer(`https://api.violetics.pw/api/ephoto360/1917?apikey=beta&text=${bo}`)
Neko.sendMessage(from, anu, image, {quoted: fgc, caption: 'Nih Kak Dah Jadi^_^'})
break

case '3dcrack':
if (isBanned)return sticBanned(from)
if (args.length ==0)return reply(`Textnya mana kak? Contoh\n${prefix + command} Tsukasa`)
bo = args.join(' ')
sticWait(from)
anu = await getBuffer(`https://api.violetics.pw/api/ephoto360/3d-crack-text-effect-online?apikey=beta&text=${bo}`)
Neko.sendMessage(from, anu, image, {quoted: fgc, caption: 'Nih Kak Dah Jadi^_^'})
break

case '3dunderwater':
if (isBanned)return sticBanned(from)
if (args.length ==0)return reply(`Textnya mana kak? Contoh\n${prefix + command} Tsukasa`)
bo = args.join(' ')
sticWait(from)
anu = await getBuffer(`https://api.violetics.pw/api/ephoto360/3d-underwater?apikey=beta&text=${bo}`)
Neko.sendMessage(from, anu, image, {quoted: fgc, caption: 'Nih Kak Dah Jadi^_^'})
break

case '3dwood':
if (isBanned)return sticBanned(from)
if (args.length ==0)return reply(`Textnya mana kak? Contoh\n${prefix + command} Tsukasa`)
bo = args.join(' ')
sticWait(from)
anu = await getBuffer(`https://api.violetics.pw/api/ephoto360/3d-wood?apikey=beta&text=${bo}`)
Neko.sendMessage(from, anu, image, {quoted: fgc, caption: 'Nih Kak Dah Jadi^_^'})
break

case '3dwood2':
if (!isPremier)return reply(mess.premier)
if (isBanned)return sticBanned(from)
if (args.length ==0)return reply(`Textnya mana kak? Contoh\n${prefix + command} Tsukasa Tsukuyomi`)
txt1 = args[0]
txt2 = args[1]
sticWait(from)
bf = await getBuffer(`https://api.violetics.pw/api/ephoto360/3d-wood2?apikey=beta&text=${txt1}&text2=${txt2}`)
Neko.sendMessage(from, bf, image, { quoted: fgc, caption: 'Nih Kak Dah Jadi^_^' })
break

case '3damericanflag':
if (isBanned)return sticBanned(from)
if (args.length ==0)return reply(`Textnya mana kak? Contoh\n${prefix + command} Tsukasa`)
bo = args.join(' ')
sticWait(from)
anu = await getBuffer(`https://api.violetics.pw/api/ephoto360/3damerican-flag?apikey=beta&text=${bo}`)
Neko.sendMessage(from, anu, image, {quoted: fgc, caption: 'Nih Kak Dah Jadi^_^'})
break

case '3dgalaxymetal':
if (!isPremier)return reply(mess.premier)
if (isBanned)return sticBanned(from)
if (args.length ==0)return reply(`Textnya mana kak? Contoh\n${prefix + command} Tsukasa Tsukuyomi`)
txt1 = args[0]
txt2 = args[1]
sticWait(from)
bf = await getBuffer(`https://api.violetics.pw/api/ephoto360/3dgalaxy-metal?apikey=beta&text=${txt1}&text2=${txt2}`)
Neko.sendMessage(from, bf, image, { quoted: fgc, caption: 'Nih Kak Dah Jadi^_^' })
break

case '3dgold':
if (!isPremier)return reply(mess.premier)
if (isBanned)return sticBanned(from)
if (args.length ==0)return reply(`Textnya mana kak? Contoh\n${prefix + command} Tsukasa Tsukuyomi`)
txt1 = args[0]
txt2 = args[1]
sticWait(from)
bf = await getBuffer(`https://api.violetics.pw/api/ephoto360/3dgold?apikey=beta&text=${txt1}&text2=${txt2}`)
Neko.sendMessage(from, bf, image, { quoted: fgc, caption: 'Nih Kak Dah Jadi^_^' })
break

case '3dgradient':
if (isBanned)return sticBanned(from)
if (!isPremier)return reply(mess.premier)
itu = args.join(' ')
sticWait(from)
ani = await getBuffer(`https://violetics.pw/api/ephoto360/3dgradient?apikey=beta&text=${itu}`)
Neko.sendMessage(from, ani, image, {quoted: fgc, caption: 'Nih Kak Dah Jadi^_^'})
break

case '3dgradient2':
if (isBanned)return sticBanned(from)
if (!isPremier)return reply(mess.premier)
anu = args.join(' ')
sticWait(from)
ug = await getBuffer(`https://violetics.pw/api/ephoto360/3dgradient2?apikey=beta&text=${anu}`)
Neko.sendMessage(from, ug, image, {quoted: fgc, caption: 'Nih Kk Dah Jadi^_^'})
break

case 'greenneon':
if (isBanned)return sticBanned(from)
if (!isPremier)return reply(mess.premier)
tytyd = args.join(' ')
sticWait(from)
buff = await getBuffer(`https://api.lolhuman.xyz/api/textprome/greenneon?apikey=Deffbotz&text=${tytyd}`)
Neko.sendMessage(from, buff, image, {quoted: mek, caption: 'Nih Kak Dah Jadi^_^'})
break 

//━━━━━━━━━━━━━━━━━━━━━━☢ QUTES MENU ☢━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━//

case 'quotesgalau':
case 'galau':
if (isBanned)return sticBanned(from)
anu = await fetchJson(`https://zenzapi.xyz/api/quotes/galau?apikey=1d94dfd003`)
tytyd = (anu.result.message)
Neko.sendMessage(from, tytyd, text, {quoted: mek})
break

case 'quotesbucin':
case 'bucin':
if (isBanned)return sticBanned(from)
anu = await fetchJson(`https://zenzapi.xyz/api/bucinquote?apikey=1d94dfd003`)
y = (anu.result.message)
Neko.sendMessage(from, y, text, {quoted: mek})
break

//━━━━━━━━━━━━━━━━━━━━━━☢ ANIME MENU ☢━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━//


case 'anime':
if (isBanned)return sticBanned(from)
if (!isPremier)return reply(mess.premier)
sticLoad(from)
iya = await getBuffer(`https://zenzapi.xyz/api/random/anime?apikey=1d94dfd003`)
Neko.sendMessage(from, iya, image, { quoted: mek, caption: 'Loli Nya Yuzaki'})
break

case 'neko':
if (isBanned)return sticBanned(from)
if (!isPremier)return reply(mess.premier)
sticLoad(from)
y = await getBuffer(`https://api.lolhuman.xyz/api/random/neko?apikey=Deffbotz`)
Neko.sendMessage(from, y, image, {quoted: mek, caption: 'Nih Om Kucing Nya^_^'})
break

case 'waifu':
if (isBanned)return sticBanned(from)
if (!isPremier)return reply(mess.premier)
sticLoad(from)
ani =await getBuffer(`https://api.lolhuman.xyz/api/random/waifu?apikey=Deffbotz`)
Teks = 'Istri Nya Yuzaki'
sendButImage(from, Teks, ``, ani, [                      
{
buttonId: `${prefix+command}`,
buttonText: {
displayText: `NEXT`,
},
type: 1,
},
]);
break

case 'shota':
if (isBanned)return sticBanned(from)
if (!isPremier)return reply(mess.premier)
sticLoad(from)
ani =await getBuffer(`https://api.lolhuman.xyz/api/random/waifu?apikey=Deffbotz`)
Teks = 'Nih Kak Shotanya^_^'
sendButImage(from, Teks, ``, ani, [                      
{
buttonId: `${prefix+command}`,
buttonText: {
displayText: `NEXT`,
},
type: 1,
},
]);
break



case 'ppcouple':
case 'ppcp':
case 'couple':
if (isBanned)return sticBanned(from)
if (!isPremier)return reply(mess.premier)
sticLoad(from)
ani = await fetchJson(`https://zenzapi.xyz/api/random/couples?apikey=1d94dfd003`)
cwek = await getBuffer(ani.result.female)
cwok = await getBuffer(ani.result.male)
Neko.sendMessage(from, cwek, image, {quoted: mek, caption: 'Nih Kak Yang Cwek^_^'})
Teks = 'Nih Kak Yang Cwok^_^'
sendButImage(from, Teks, `*_NekoChan_*`, cwok, [                      
{
buttonId: `${prefix+command}`,
buttonText: {
displayText: `NEXT`,
},
type: 1,
},
]);
break


//━━━━━━━━━━━━━━━[ AKHIR ]━━━━━━━━━━━━━━━\\
default:
if (budy.startsWith('>')) {
console.log(color('[EVAL1]'), color(moment(mek.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`eval return`))
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
reply(`${evaled}`)
} catch (err) {
reply(`${err}`)
}
} else if (budy.startsWith('x')) {
console.log(color('[EVAL2]'), color(moment(mek.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`eval identy`))
try {
return Neko.sendMessage(from, JSON.stringify(eval(budy.slice(2)), null, '\t'), text, { quoted: mek })
} catch (err) {
e = String(err)
reply(e)
}
}
}
} catch (e) {
e = String(e)
if (!e.includes("this.isZero") && !e.includes("jid")) {
console.log('Error : %s', color(e, 'red'))
}
}
}


	
    
