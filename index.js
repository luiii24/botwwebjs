const fetch = require('node-fetch')                 
const util = require('util')
const { exec } = require('child_process')
const ft = require('file-type')      
const fs = require('fs')  
const { sizeFormatter } = require("human-readable");        
const translate = require('translate-google-api')       
const oai = require('openai')                    
const rmbg = require('remove.bg')    
const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)      
owner = ['6282146092695']
const { MessageMedia, Chat, Message, Client, LocalAuth } = require("whatsapp-web.js")
const qrterm = require("qrcode-terminal")
const { platform } = require('os')
const client = new Client({
    authStrategy: new LocalAuth(),
    puppeteer: {
        args: ['--no-sandbox'],
        executablePath: platform() === 'win32' ? 'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe' : '/usr/bin/google-chrome-stable'
    }
});

client.initialize()

client.on("loading_screen", (percent, msg) => {
    console.log("LOADING SCREEN", percent, msg)
})

client.on("qr", (qrdata) => {
    qrterm.generate(qrdata, { small: true }, (qrbuffer) => {
        console.log(qrbuffer)
    })
})

databased = async () => {
      if (!fs.existsSync(`./database.json`)) return ({})
      const json = JSON.parse(fs.readFileSync(`./database.json`, 'utf-8'))
      return json
}

dbsaver = async data => {
      const database = data ? data : global.db
      fs.writeFileSync(`./database.json`, JSON.stringify(database, null, 3))
}
const connect = async () => {
   let content = await databased()
   if (!content || Object.keys(content).length === 0) {
      global.db = {
         users: {},
         groups: {},
         setting: {}
      }
      await dbsaver()
   } else {
      global.db = content
   }
}

connect().catch(() => connect())

setInterval(async () => { fs.writeFileSync(`./database.json`, JSON.stringify(global.db, null, 3))}, 3 * 1000)

client.on("authenticated", () => {
    console.log("AUTHENTICATION")
})

client.on("auth_failure", () => {
    console.log("AUTHENTICATION FAILED")
})

client.on("ready", () => {
    console.log("WHATSAPP WEB IS READY!")
})

client.on('group_join', async(mek) => {
ini_thumbnail = Buffer.from(await (await fetch('https://telegra.ph/file/2ba734ae781f0d494adba.jpg')).arrayBuffer()).toString('base64')
let mentions = Array(await client.getChatById(mek.id.participant))
await client.sendMessage(mek.id.remote, `Welcome @${mek.id.participant.split('@')[0]}!`, {mentions: mentions, extra: { quotedParticipant: '6281111111111@c.us', quotedRemoteJid: 'status@broadcast', quotedMsg: { type: 'chat', body: require('moment-timezone')().tz('Asia/Jakarta').format("dddd, DD MMM YYYY HH:mm A Z")}, ctwaContext: {title: 'Whatsapp Bot^', description: 'create by lui', thumbnail: ini_thumbnail, thumbnailUrl: '', mediaType: 1, mediaUrl: '', sourceUrl: 'https://wa.me/stickerpack/luidep'}}})
})
client.on('group_leave', async(mek) => {
ini_thumbnail = Buffer.from(await (await fetch('https://telegra.ph/file/2ba734ae781f0d494adba.jpg')).arrayBuffer()).toString('base64')
let mentions = Array(await client.getChatById(mek.id.participant))
await client.sendMessage(mek.id.remote, `Bye @${mek.id.participant.split('@')[0]}!`, {mentions: mentions, extra: { quotedParticipant: '6281111111111@c.us', quotedRemoteJid: 'status@broadcast', quotedMsg: { type: 'chat', body: require('moment-timezone')().tz('Asia/Jakarta').format("dddd, DD MMM YYYY HH:mm A Z")}, ctwaContext: {title: 'Whatsapp Bot^', description: 'create by lui', thumbnail: ini_thumbnail, thumbnailUrl: '', mediaType: 1, mediaUrl: '', sourceUrl: 'https://wa.me/stickerpack/luidep'}}})
})
client.on("message_create", async (message) => {
 fs.writeFileSync(`./database.json`, JSON.stringify(global.db, null, 3))
   await handle(client, message)
})

/**
   * panel gratis https://nekopoi.care/hentai/panel-gratis-part-2?login.php
*/

var game_TebakAnime = [];
var game_TebakPahlawan = [];
var handle = async (client, message) => {
var sms = message
var x = client
    try {
         ini_thumbnail = Buffer.from(await (await fetch('https://telegra.ph/file/2ba734ae781f0d494adba.jpg')).arrayBuffer()).toString('base64')
         let body = message.body || ""
         let prefa = /['/', '.', '#', 'x', '!']/g
         const isCreator = owner.map(v => v.replace(/[^0-9]/g, '') + '@c.us').includes(sms.author ? sms.author : sms.from)
         const gcOnly = sms.id.remote.endsWith('g.us')
         const pcOnly =  sms.id.remote.endsWith('c.us')
         const participantsGroup = gcOnly ? (await sms.getChat()).participants : ''
         const AdminFilter = gcOnly ? participantsGroup.filter(v => v.isAdmin).map(v => v.id.user) : ''
         const adminOnly =  gcOnly ? AdminFilter.map(v => v.replace(/[^0-9]/g, '') + '@c.us').includes(sms.author ? sms.author : sms.from) : ''
         const botAdmin =  gcOnly ? AdminFilter.map(v => v.replace(/[^0-9]/g, '') + '@c.us').includes(x.info.me._serialized) : ''
         const prefix = prefa.test(body) ? Object.entries(body)[0][1].replace(/[A-Za-z0-9]/g, '.') : '.' 
         const command = body.startsWith(prefix) ? body.slice(1).split(" ").shift().toLowerCase() : ""        
         const text = body.slice(command.length + 1, body.length)                             
         if (game_TebakAnime.hasOwnProperty(sms.from)) {
         jwbn = game_TebakAnime[sms.from].nama
         if (body.toLowerCase() == 'skip') {
         sms.reply('Soal terskip ketik ' + prefix + 'tebakanime untuk memulai permainan lagi...')
         delete game_TebakAnime[sms.from]
         } else if (body.toLowerCase() == 'clue') {
         let nya = game_TebakAnime[sms.from].nama
         let nyanya = nya.replace(/[bcdfghjklmnpqrstvwxyz]/g, '_')
         sms.reply('```' + nyanya + '```')                  
         } else if (sms._data.quotedStanzaID ? sms._data.quotedStanzaID == game_TebakAnime[sms.from].id : false) {
         if (body.toLowerCase() == jwbn) {
         sms.reply('Jawaban Benar!') 
         delete game_TebakAnime[sms.from]
         } else return sms.reply(`jawaban Salah!\nKetik skip jika sudah menyerah dengan soal tersebut atau ketik clue untuk melihat kunci jawaban`)
         }
         }
         if (game_TebakPahlawan.hasOwnProperty(sms.from)) {
         jwbn = game_TebakPahlawan[sms.from].nama
         if (body.toLowerCase() == 'skip') {
         sms.reply('Soal terskip ketik ' + prefix + 'tebakpahlawan untuk memulai permainan lagi...')
         delete game_TebakPahlawan[sms.from]
         } else if (body.toLowerCase() == 'clue') {
         let nya = game_TebakPahlawan[sms.from].nama
         let nyanya = nya.replace(/[bcdfghjklmnpqrstvwxyz]/g, '_')
         sms.reply('```' + nyanya + '```')                  
         } else if (sms._data.quotedStanzaID ? sms._data.quotedStanzaID == game_TebakPahlawan[sms.from].id : false) {
         if (body.toLowerCase() == jwbn) {
         sms.reply('Jawaban Benar!') 
         delete game_TebakPahlawan[sms.from]
         } else return sms.reply(`jawaban Salah!\nKetik skip jika sudah menyerah dengan soal tersebut atau ketik clue untuk melihat kunci jawaban`)
         }
         }
         const isNumber = x => typeof x === 'number' && !isNaN(x)
         if (gcOnly) {
         let user = global.db.users[sms._data.id.participant]
         if (user) {
         if (!('afk' in user)) user.afk = -1
         if (!('afk_info' in user)) user.afk_info = ''
         if (!('banned' in user)) user.banned = false
         if (!('premium' in user)) user.premium = false
         if (!isNumber(user.expired)) user.expired = 0
         if (!isNumber(user.limit)) user.limit = 10
         } else {
         global.db.users[sms._data.id.participant] = {
         afk: -1,
         afk_info: '',
         banned: false,
         premium: false,
         expired: 0,
         limit: 25
         }
        }           
        } else {
         let user = global.db.users[sms.from]
         if (user) {
         if (!('afk' in user)) user.afk = -1
         if (!('afk_info' in user)) user.afk_info = ''
         if (!('banned' in user)) user.banned = false
         if (!('premium' in user)) user.premium = false
         if (!isNumber(user.expired)) user.expired = 0
         if (!isNumber(user.limit)) user.limit = 10
         } else {
         global.db.users[sms.from] = {
         afk: -1,
         afk_info: '',
         banned: false,
         premium: false,
         expired: 0,
         limit: 25
         }
        }                   
        }
        if (sms.from.endsWith('g.us')) {
        let group = global.db.groups[sms.from]
        if (group) {
        if (!('mute' in group)) group.mute = false
        if (!('game' in group)) group.game = false
        if (!('nsfw' in group)) group.game = false
        if (!('welcome' in group)) group.welcome = true
        if (!('textwel' in group)) group.textwel = ''
        if (!('textleft' in group)) group.textleft = ''
        if (!('antilink' in group)) group.member = false
         } else {
         global.db.groups[sms.from] = {
            mute: false,
            game: true,
            nsfw: false,
            welcome: true,
            textwel: '',
            textleft: '',
            antilink: false
         }
         }
         }
         let setting = global.db.setting
         if (setting) {
         if (!('groupmode' in setting)) setting.groupmode = true
         if (!('self' in setting)) setting.self = 'public'
         } else {
         global.db.setting = {
         self: 'public'
          }
         }
         if (global.db.setting.self == 'self' && !isCreator) {
         if (command) return
         } 
	     mentionUser = [...new Set([...(sms._data.mentionedJidList || []), ...(sms._data.quotedMsg ? [sms._data.quotedParticipant] : [])])] 
	     for (let jid of mentionUser) {
            let user = global.db.users[jid]
            if (!user) continue
            let afkTime = user.afk
            if (!afkTime || afkTime < 0) continue
            sms.reply(`Jangan tag dia! Dia sedang AFK ${global.db.users[jid].afk_info ? 'dengan alasan ' + global.db.users[jid].afk_info : 'tanpa alasan'}`.trim())
         }
         afk_jid = gcOnly ? sms._data.id.participant : sms.from
         if (global.db.users[afk_jid].afk > 1) {
          global.db.users[afk_jid].afk = -1          
          sms.reply('kamu telah berhenti afk')
          }         
         syntax = require('syntax-error')   
         await printMessage(sms, x)
setTimeout( async() => {
         switch (command) {
        case 'tes': {
        sms.reply('ready!')
        }
        break
        case 'menu': {
        const from = gcOnly ? sms.author : sms.from
  txt = `┌──⭓ *main*
│
│⭔ ${prefix}afk <alasan>
└───────⭓
┌──⭓ *downloader*
│
│⭔ ${prefix}instagram <url>
│⭔ ${prefix}tiktok <url>
│⭔ ${prefix}facebook <url>
│⭔ ${prefix}megadl <url>
│⭔ ${prefix}play <query>
│⭔ ${prefix}apk <text>
│⭔ ${prefix}ytmp4 <url>
│⭔ ${prefix}ytmp3 <url>
└───────⭓
┌──⭓ *games*
│
│⭔ ${prefix}tebakanime
│⭔ ${prefix}tebakpahlawan
└───────⭓
┌──⭓ *internet*
│
│⭔ ${prefix}jadwalsholat <kota/city>
│⭔ ${prefix}infogempa
│⭔ ${prefix}brainly <text>
│⭔ ${prefix}lirik <text/query>
│⭔ ${prefix}translate <language> <text/tag message>
│⭔ ${prefix}openai <text>
│⭔ ${prefix}playstore <text>
│⭔ ${prefix}wallpaper <query>
│⭔ ${prefix}waifu <chara>
│⭔ ${prefix}nekopoi <query>
└───────⭓
┌──⭓ *grup*
│
│⭔ ${prefix}tagall <text>
│⭔ ${prefix}hidetag <text>
│⭔ ${prefix}kick <tag/reply>
│⭔ ${prefix}add <number/reply/tag>
│⭔ ${prefix}promote <reply/tag>
│⭔ ${prefix}demote <reply/tag>
│⭔ ${prefix}linkgc 
│⭔ ${prefix}revoke
└───────⭓
┌──⭓ *stiker & tools*
│
│⭔ ${prefix}s <reply/tag media>
│⭔ ${prefix}stiker <reply/tag media>
│⭔ ${prefix}wm <packname|author>
│⭔ ${prefix}take <packname|author>
│⭔ ${prefix}fakechat <text>
│⭔ ${prefix}removebg <reply/send image file>
│⭔ ${prefix}snobg <reply/send image file>
│⭔ ${prefix}toimg <reply sticker>
│⭔ ${prefix}upload <reply/send media>
└───────⭓
┌──⭓ *owner*
│
│⭔ ${prefix}owner <ingin menanyakan sesuatu ?>
│⭔ ${prefix}join <link>
│⭔ ${prefix}x <code>
│⭔ ${prefix}tes
│⭔ ${prefix}ping
│⭔ ${prefix}status
└───────⭓`
let mentions = Array(await x.getChatById(from))
await x.sendMessage(sms.from, `Hiii @${from.split('@')[0]} ! \nNote: abaikan <>\n${readMore}` + txt, {mentions: mentions, extra: { quotedParticipant: '6281111111111@c.us', quotedRemoteJid: 'status@broadcast', quotedMsg: { type: 'chat', body: require('moment-timezone')().tz('Asia/Jakarta').format("dddd, DD MMM YYYY HH:mm A Z")}, ctwaContext: {title: 'Whatsapp Bot^', description: 'create by lui', thumbnail: ini_thumbnail, thumbnailUrl: '', mediaType: 1, mediaUrl: '', sourceUrl: 'https://wa.me/stickerpack/luidep'}}})
        } 
        break
        case 'ping': {
        let old = new Date()            
        await sms.reply('Checking . . .')
        return sms.reply(`Response Speed : ${((new Date - old)*1)}ms`)     
        } 
        break
        case 'status': {
        let arab = await client.getChats()
        const formatSize = sizeFormatter({
		std: "JEDEC",
		decimalPlaces: "2",
		keepTrailingZeroes: false,
		render: (literal, symbol) => `${literal} ${symbol}B`,
		});        
        let os = require("os");        
        let old = new Date()            
		let text = "";
		text += `*HOST:*\n`;
		text += `Arch: ${os.arch()}\n`
		text += `Hostname: ${os.hostname()}\n`
		text += `Release: ${os.release()}\n`		
		text += `Type: ${os.type()}\n`
		text += `Machine: ${os.machine()}\n`	
    	text += `Memory: ${formatSize(os.totalmem() - os.freemem())} / ${formatSize(os.totalmem())}\n`;    	    	
		text += `Platform: ${os.platform()}\n`;
		text += `Version: ${os.version()}\n\n`		
    	text += `*BOT STAT:*\n`
    	text +=  `Library: whatsapp-web.js\n`    	    	
    	text +=  `Status : ${global.db.setting.self}\n`    	
    	text +=  `Runtime : ${runtimes(process.uptime())}\n`
    	text += `Speed : ${((new Date - old)*1)}ms\n`
    	text += `Group : ` + arab.filter(v => v.id.server.endsWith('g.us')).map(v => v).length + `\n`   
    	text += `Private chat : ` + arab.filter(v => v.id.server.endsWith('c.us')).map(v => v).length + `\n`
    	text += `All chats : ` + arab.length + `\n`	    	   	    	
		await sms.reply(text)        
        }
        break
        case 'infogempa': {
        await sms.reply(util.format(JSON.parse(await require('cloudscraper').get('https://data.bmkg.go.id/DataMKG/TEWS/autogempa.json')).Infogempa.gempa).replace('{', '').replace('}', ''))
        }
        break
        case 'jadwalsholat':
        case 'sholat':
        case 'solat': {
        if (!text) return sms.reply('contoh: ' + prefix + command + ' ponorogo')
        let B = await jdwlsolat(text.trim())
        let D = new Date
        txt = `Jadwal solat untuk wilayah` + text + ` hari ini\n` + readMore
        txt += `date: ` + D.toLocaleDateString('id-ld') + `\n`
        txt += `Imsyak: ` + B.imsyak + `\n`
        txt += `Subuh: ` + B.subuh + `\n`
        txt += `Terbit: ` + B.terbit + `\n`
        txt += `Dhuha: ` + B.dhuha + `\n`
        txt += `Dzuhur: ` + B.dzuhur + `\n`
        txt += `Ashr: ` + B.ashr + `\n`
        txt += `Maghrib: ` + B.maghrib + `\n`
        txt += `Isyak: ` + B.isya + `\n`
        txt += `Parameter: ` + B.parameter + `\n`
        sms.reply(txt)           
        }
        break
        case 'lirik':
        case 'lyrics': {
        if (!text) return sms.reply('judulnya ?')
        try {
        var { judul, thumb, lirik } = await liriks(text)
        await sms.reply(await MessageMedia.fromUrl(thumb), false, { caption: `*` + judul + `*\n\n` + readMore + lirik });        
        } catch {}
        }
        break
        case 'join': {
        // from https://github.com/Ftwrr/botwaweb/blob/main/plugins/downloader-tiktok.js 1:1       
        if (!text) return sms.reply('link gc nya ?')
        if (!isCreator) return sms.reply('owner only')
        try {
        let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i
        let [_, code] = text.match(linkRegex) || []
	    if (!code) return m.reply(`Input URL:\n${prefix + command} https://chat.whatsapp.com/E3XI3lj9wiDKWtqdikend7`);
	    await x.acceptInvite(code)
	    } catch (e) {
        sms.reply('terjadi kesalahan mungkin bot telah di keluarkan dari grup atau link yang anda masukan mungkin salah atau grup tersebut telah memperbarui linknya')
        console.log(e)
        }
        }       
        break       
        case 'linkgc': {
	    sms.reply('https://chat.whatsapp.com/' + await (await sms.getChat()).getInviteCode())        
        }
        break
        case 'revoke': {
        if (!adminOnly) return sms.reply('admin only!')
        if (!botAdmin) return sms.reply('jadikan bot sebagai admin!')        
	    await (await sms.getChat()).revokeInvite()
	    sms.reply('https://chat.whatsapp.com/' + await (await sms.getChat()).getInviteCode())   
        }
        break
        case 'kick':
        case 'add':
        case 'promote':
        case 'demote': {
        try {
        if (!gcOnly) return sms.reply('grup only!')
        if (!adminOnly) return sms.reply('admin only!')
        if (command == 'kick') {
        let numb = sms._data.quotedParticipant ? sms._data.quotedParticipant : text
     	await (await sms.getChat()).removeParticipants(Array(numb.replace(/[^0-9]/g, '') + '@c.us'))        
     	return sms.reply('done!')
        } else if (command == 'add') {
        let numb = sms._data.quotedParticipant ? sms._data.quotedParticipant : text        
     	await (await sms.getChat()).addParticipants(Array(numb.replace(/[^0-9]/g, '') + '@c.us'))        
     	return sms.reply('done!')     	    
        } else if (command == 'promote') {
        let numb = sms._data.quotedParticipant ? sms._data.quotedParticipant : text        
     	await (await sms.getChat()).promoteParticipants(Array(numb.replace(/[^0-9]/g, '') + '@c.us'))           
     	return sms.reply('done!')     	             
        } else if (command == 'demote') {
        let numb = sms._data.quotedParticipant ? sms._data.quotedParticipant : text        
     	await (await sms.getChat()).demoteParticipants(Array(numb.replace(/[^0-9]/g, '') + '@c.us'))                    
     	return sms.reply('done!')     	  
        }
        } catch (e) {
        console.log(e)
        sms.reply(prefix + command + ' tag/reply/number')
        }   
        }
        break
        case 'nekopoi': {
        if (!text) return sms.reply('query nya ?')
        try {
        var ok = await nekoparse(text)
        dwnld = '';
        for (let i of ok.download) {
        dwnld += i.name + `\n` + i.link + `\n` 
        }
        const buffer = Buffer.from(await (await fetch(ok.thumb)).arrayBuffer())
        await sms.reply(new MessageMedia((await ft.fromBuffer(buffer)).mime, buffer.toString("base64")), false, { caption: ok.information });
        return sms.reply(dwnld)
        } catch (E) {
        console.log(E)
        sms.reply('eror tidak di ketahui coba beberapa saat lagi....')
        }
        }
        break
        case 'translate': 
        case 'tr': {
        if (!text) return sms.reply(`Teksnya ?\nContoh: ${body} id Hi`)
        if (text && sms._data.quotedMsg) {
        let lang = text.split` `[1]
        try {
            let data = sms._data.quotedMsg.body
            let result = await translate(`${data}`, {
               to: lang
            })
            sms.reply(result[0])
        } catch {
            return sms.reply(`Language code not supported.`)
        }
        } else if (text) {
        let lang = text.split` `[1]
        try {
            let data = body.slice(command.length + 4, body.length)
            let result = await translate(`${data}`, {
            to: lang
        })
            sms.reply(result[0])
        } catch {
            return sms.reply(`Language code not supported.`)
        }
        }        
        }
        break
        case 'owner':
        case 'creator': {
        await x.sendMessage(sms.from, '', { extra: {  body: 
        'BEGIN:VCARD\n' +
        'VERSION:3.0\n' +
        'N:;lui;;;\n' +
        'FN:lui berotak senku 😏\n' +
        'item1.TEL;waid=6282146092695:+62 821-4609-2695\n' +
        'item1.X-ABLabel:Ponsel\n' +
        'nitem2.EMAIL;type=Hubungi Saya lewat email:jlmao@students.prairiestate.edu\n' +
        'item3.URL;type=Follow instagram saya:https://instagram.com/ahmdlui\n' +
        'item3.X-ABLabel:Instagram\n' + 
        'item4.ADR:;;JAWA;;;;\n' + 
        'item4.X-ABLabel:Region\n' +
        'END:VCARD',
        type: 'vcard',  
        vCards: [
        'BEGIN:VCARD\n' +
        'VERSION:3.0\n' +
        'N:;lui;;;\n' +
        'FN:lui berotak senku 😏\n' +
        'item1.TEL;waid=6282146092695:+62 821-4609-2695\n' +
        'item1.X-ABLabel:Ponsel\n' +
        'nitem2.EMAIL;type=Hubungi saya lewat email:jlmao@students.prairiestate.edu\n' +
        'item3.URL;type=Follow instagram saya:https://instagram.com/ahmdlui\n' +
        'item3.X-ABLabel:Instagram\n' + 
        'item4.ADR:;;JAWA;;;;\n' + 
        'item4.X-ABLabel:Region\n' +
        'END:VCARD'
        ]
        }})
        }
        break        
        case 'self': {
        if (global.db.setting.self == 'self') return sms.reply('Bot sudah self sebelumnya...')
        global.db.setting.self = 'self'
        sms.reply('done!')
        }
        break
        case 'public': {
        if (global.db.setting.self == 'public') return sms.reply('Bot sudah public sebelumnya...')
        global.db.setting.self = 'public'
        sms.reply('done!')        
        }
        break
        case 'openai':
        case 'ai': {
        if (!text) return sms.reply('teksnya ?')
        const { Configuration, OpenAIApi } = oai       
        const configuration = new Configuration({
            apiKey: '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'
         })
         const openai = new OpenAIApi(configuration)
         const json = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: text,
            temperature: 0.7,
            max_tokens: 350,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
         })
         if (json.statusText != 'OK' || json.data.choices.length == 0) return client.reply(m.chat, global.status.fail, m)
         sms.reply(json.data.choices[0].text.trim())   
        } 
        break
        case 'pengumuman': 
        case 'tagall': {
        if (!gcOnly) return sms.reply('grup only!')
        if (!text) return sms.reply('pengumumannya apa?' + `\n` + 'Contoh: ' + command + ' admin gay')
        if (!adminOnly) return sms.reply('admin only!')	         
    	const participants = (await sms.getChat()).participants.map(v => v.id._serialized);
     	const mentions = await Promise.all(participants.map(jid => x.getChatById(jid)));
     	let teks = ''
	    teks += sms.hasQuotedMsg ? sms._data.quotedMsg.body : text
        teks += `\n` + readMore + `\n`
        for (let i of participants) {
        teks += `@${i.split('@')[0]}\n`
        }
    	client.sendMessage(sms.id.remote, teks, { mentions })     
        }
        break
        case 'hidetag': {        
        if (!gcOnly) return sms.reply('grup only!')
        if (!text) return sms.reply('pengumumannya apa?' + `\n` + 'Contoh: ' + prefix + command + ' admin gay')
        if (!adminOnly) return sms.reply('admin only!')	         
    	const participants = (await sms.getChat()).participants.map(v => v.id._serialized);
    	const mentions = await Promise.all(participants.map(jid => x.getChatById(jid)));
	    let teks = sms.hasQuotedMsg ? sms._data.quotedMsg.body : text
    	client.sendMessage(sms.id.remote, teks, { mentions })     
        }
        break
        case 'sschat': {
        await x.pupPage.setViewport({ width: 720, height: 1600})
        let media = await x.pupPage.screenshot({fullPage: true})
        const { MessageMedia } = require('whatsapp-web.js')
        sms.reply(new MessageMedia((await ft.fromBuffer(media)).mime, media.toString("base64")))        
        } 
        break
        case 'tiktok':
        case 'tiktokdl':
        case 'tt': {
// * from https://github.com/Ftwrr/botwaweb/blob/main/plugins/downloader-tiktok.js 1:1        
        if (!text) return sms.reply('url?')
        const res = await fetch('https://developers.tiklydown.me/api/download?url=' + text)
        if (!res.ok) return sms.reply(`${res.status} ${res.statusText}`);
        const data = await res.json()
        const buffVideo = Buffer.from(await (await fetch(data.video.noWatermark)).arrayBuffer())
        const buffAudio = Buffer.from(await (await fetch(data.music.play_url)).arrayBuffer())
        await sms.reply(new MessageMedia((await ft.fromBuffer(buffVideo)).mime, buffVideo.toString("base64")), false, { caption: `*${data.author.name}*\n@${data.author.unique_id}`.trim() });
        sms.reply( new MessageMedia((await ft.fromBuffer(buffAudio)).mime, buffAudio.toString("base64")));
        } 
        break
        case 'toimg': {
        let quotedMsg = await sms.getQuotedMessage() || sms;  
        let oke = (await quotedMsg.downloadMedia()) ? (await quotedMsg.downloadMedia()).data : false
        if (!oke) return sms.reply('reply stiker (type: stiker require)')       
        await fs.writeFileSync('luimbps.webp', Buffer.from(oke, 'base64'))        
        exec(`ffmpeg -i luimbps.webp lui.jpeg`, async (err, stderr, stdout) => {
            if (err) return sms.reply(`Convert failed!`)
        await sms.reply(await MessageMedia.fromFilePath('./lui.jpeg'))
        fs.unlinkSync('./lui.jpeg')          
        fs.unlinkSync('./luimbps.webp')                                
        })
        }
        break
        case 'brainly': {
         if (!text) return sms.reply('Soalnya ?')
         const { Brainly } = require("brainly-scraper-v2");
         const brain = new Brainly("id"); // 'id' - Default to 'id'
         let res = await brain.search(text, 'id')
         let no = 1
         let teks = ''
         for (let i of res) {
         teks += `${no++}. Soal: ${i.question.content}\n\nJawaban: ` + i.answers[0].content + `\n\n`
         }
         sms.reply(teks)        
        }
        break
        case 'fb':
        case 'fbdl':
        case 'facebook':
        case 'facebookdl': {
        if (!text) return sms.reply('url ?')
        let data = require('fg-ig')
        let json = await data(text)
        for (let i of json.url_list) {
        sms.reply(await MessageMedia.fromUrl(i))	        
        }
        } 
        break
        case 'igdl':
        case 'instagram': 
        case 'ig': {
        if (!text) return sms.reply('input url?' + `\n` + 'Contoh: ' + body + ' https://www.instagram.com/p/CqAkNPdpreQ/?igshid=YmMyMTA2M2Y=')
        let data = (await require('fg-ig')(text)).url_list
        for (let i of data) {
        const buffer = Buffer.from(await (await fetch(i)).arrayBuffer())
        await sms.reply(new MessageMedia((await ft.fromBuffer(buffer)).mime, buffer.toString("base64")), false, { caption: 'type: ' + (await ft.fromBuffer(buffer)).mime });                
        }    
        }
        break       
        case 'nobg':
        case 'removebg': {        
        let quotedMsg = await sms.getQuotedMessage() || sms;  
        let oke = (await quotedMsg.downloadMedia()) ? (await quotedMsg.downloadMedia()).data : false
        if (!oke) return sms.reply('send with caption or reply (type: image require)')       
        try {
    	let outputFile = await './nobg-' + Math.floor(Math.random() * 10000) + '.png'
        await rmbg.removeBackgroundFromImageBase64({
        base64img: oke,
        apiKey: "3U9i55H7hjHgUJQ7PdjsFEfY",
        size: "regular",
        type: "person",
        outputFile 
        }).then(async () => {
        let results = await fs.readFileSync(outputFile, { encoding: 'base64' })
        sms.reply(new MessageMedia('image/png', results, 'remove_bg.png'), false, {sendMediaAsDocument: true})      
        await fs.unlinkSync(outputFile)
        })
        } catch(E) {
        console.log(E)
        sms.reply('eror coba dengan gambar lainnya...')
        } 
        }
        break       
        case 'tebakanime': {
        if (sms.from in game_TebakAnime) return sms.reply('Masih ada soal yg blum kamu jawab!')
        var soal = await pickRandom((await nimex()).row)
        game_TebakAnime[sms.from] = { nama: soal.nama.toLowerCase(), id: (await sms.reply(await MessageMedia.fromUrl(soal.gambar, { unsafeMime: true }), '', { caption: 'Siapakah nama dari karakter tersebut?' + `\n*tag / reply soalnya jika ingin menjawab!*` + readMore + 'timeout: 2 menit' }))._data.id.id }
        setTimeout(() => {
        if (game_TebakAnime[sms.from]) {
            sms.reply('Waktu Habis!' + `\n` + 'Jawabannya adalah ' + game_TebakAnime[sms.from].nama)
            delete game_TebakAnime[sms.from] 
         }}, 120000)
        }
        break
        case 'tebakpahlawan': {
        if (sms.from in game_TebakPahlawan) return sms.reply('Masih ada soal yg blum kamu jawab!')
        var soal = await tbpahlawan()
        game_TebakPahlawan[sms.from] = { nama: soal.nama.toLowerCase(), id: (await sms.reply(await MessageMedia.fromUrl(soal.gambar, { unsafeMime: true }), '', { caption: 'Siapakah nama dari tokoh tersebut?' + `\n*tag / reply soalnya jika ingin menjawab!*` + readMore + 'timeout: 2 menit' }))._data.id.id }
        setTimeout(() => {
        if (game_TebakPahlawan[sms.from]) {
            sms.reply('Waktu Habis!' + `\n` + 'Jawabannya adalah ' + game_TebakPahlawan[sms.from])
            delete game_TebakPahlawan[sms.from] 
         }}, 120000)
        }
        break        
        case 'snobg': {        
        let quotedMsg = await sms.getQuotedMessage() || sms;  
        let oke = (await quotedMsg.downloadMedia()) ? (await quotedMsg.downloadMedia()).data : false
        if (!oke) return sms.reply('send with caption or reply (type: image require)')       
        try {
    	let outputFile = await './nobg-' + Math.floor(Math.random() * 10000) + '.png'
        await rmbg.removeBackgroundFromImageBase64({
        base64img: oke,
        apiKey: "3U9i55H7hjHgUJQ7PdjsFEfY",
        size: "regular",
        type: "person",
        outputFile 
        }).then(async () => {
        let results = await fs.readFileSync(outputFile, { encoding: 'base64' })
        sms.reply(new MessageMedia((await ft.fromBuffer( await Buffer.from(results, 'base64'))).mime, results, 'remove_bg.png'), false, { sendMediaAsSticker: true, stickerName: 'by', stickerAuthor: 'lui', stickerCategories: ['lui'] } )    
        await fs.unlinkSync(outputFile)
        })
        } catch(E) {
        console.log(E)
        sms.reply('eror coba dengan gambar lainnya...')
        } 
        }
        break
        case 'apk': 
        case 'playstore': {
        if (!text) return sms.reply('nama apknya ?')
        let { url } = (await apksearch(text)).data[0]
        const {nama_apk, id, terakhir_update, dibutuhkan, versi, kategori, size, jumlah_download, rate, logo, dl_url, deskripsi} = await apkinfo(url)
        const { go_to_download } = (await apkdl(dl_url))
        let caption = "";
        caption += 'nama apk: ' + nama_apk + `\n`
        caption += 'id: ' + id + `\n`
        caption += 'terakhir update: ' + terakhir_update + `\n`
        caption += 'dibutuhkan: ' + dibutuhkan + `\n`
        caption += 'versi: ' + versi + `\n`
        caption += 'kategori: ' + kategori + `\n`        
        caption += 'size: ' + size + `\n`
        caption += 'jumlah download: ' + jumlah_download + `\n`        
        caption += 'rate: ' + rate + `\n`
        caption += 'deskripsi: ' + readMore + deskripsi + `\n`
        await sms.reply(await MessageMedia.fromUrl(logo), false, {caption: caption})	  
        sms.reply('Tunggu sebentar file apk akan segera dikirim....' + `\n` + 'Jika tidak terkirim maka aplikasi terlalu besar atau bot dalam kendala jadi mohon di maklumi saja atau anda bisa mendownload sendiri melalui link berikut ini ' + go_to_download)  
        if (parseInt(size) >= 10 && !size.match('KB')) return sms.reply('file apk terlalu besar untuk di kirim oleh bot')  
        return await sms.reply(await MessageMedia.fromUrl(go_to_download, { unsafeMime: true, filename: nama_apk + '.apk' }), '', { sendMediaAsDocument: true });
        }
        break
        case 'play': {
        if (!text) return sms.reply('Mau Cari apa ?')
        try {
        const yts = require('yt-search')
        const y2mate = require('./y2mate')
         let json = await yts.search(text)
         let res = json.all[Math.floor(Math.random() * json.all.length)]        
         let caption = ''
         caption += `${res.title}\n\n`
         caption += `Upload by: ${res.author.name} (${res.author.url})\n`
         caption += `Description: ${res.description}\n`
         caption += `Upload at: ${res.ago}\n`
         caption += `Duration: ${res.duration}\n\n`   
         caption += `Tunggu sebentar file audio sedang dikirimkan......\n`
         caption += `jika kamu ingin memilih file video anda bisa mengetik dengan .ytv ${res.url}\n`        
         const ytad = await y2mate.yta(res.url)
         if (parseInt(ytad.data.size) >= 10) return sms.reply('file terlalu besar untuk di kirim bot anda bisa mendownload sendiri melalui link berikut ini' + `\n\n\n` + json.data.url)           
         const buffAudio = Buffer.from(await (await fetch(ytad.data.url)).arrayBuffer())                 
         await sms.reply(await MessageMedia.fromUrl(res.thumbnail), false, { caption: caption })
         return sms.reply( new MessageMedia((await ft.fromBuffer(buffAudio)).mime, buffAudio.toString("base64"), ytad.data.filename), false, { sendMediaAsDocument: true });                 
        } catch {
        sms.reply('err coba lagi')
        } 
        }
        break
        case 'ytv':
        case 'ytmp4': {
        if (!text) return sms.reply('url ?')
        let y2mate = require('./y2mate')
        let json = await y2mate.ytv(text)
        caption = ""
        caption += `title: ${json.title}\n`
        caption += `duration: ${json.duration}\n`
        caption += `channel: ${json.channel}\n`
        caption += `views: ${json.views}\n`
        caption += `publish: ${json.publish}\n`
        caption += `size: ${json.data.size}\n`      
        caption += `quality: ${json.data.quality}\n` 
        sms.reply('wait......')               
        if (parseInt(json.data.size) >= 15) return sms.reply('file terlalu besar untuk di kirim bot anda bisa mendownload sendiri melalui link berikut ini' + `\n\n\n` + json.data.url)      
        const buffVideo = Buffer.from(await (await fetch(json.data.url)).arrayBuffer())
        await sms.reply(new MessageMedia((await ft.fromBuffer(buffVideo)).mime, buffVideo.toString("base64")), false, { caption: caption.trim() });        
        } 
        break
        case 'yta':
        case 'ytmp3': {
        if (!text) return sms.reply('url ?')
        let y2mate = require('./y2mate')
        let json = await y2mate.yta(text)
        caption = ""
        caption += `title: ${json.title}\n`
        caption += `duration: ${json.duration}\n`
        caption += `channel: ${json.channel}\n`
        caption += `views: ${json.views}\n`
        caption += `publish: ${json.publish}\n`
        caption += `size: ${json.data.size}\n`      
        caption += `quality: ${json.data.quality}\n` 
        sms.reply('wait......')             
        if (parseInt(json.data.size) >= 10) return sms.reply('file terlalu besar untuk di kirim bot anda bisa mendownload sendiri melalui link berikut ini' + `\n\n\n` + readMore + json.data.url)  
        const buffAudio = Buffer.from(await (await fetch(json.data.url)).arrayBuffer())
        await sms.reply(new MessageMedia((await ft.fromBuffer(buffAudio)).mime, buffAudio.toString("base64"), json.data.filename), false, { sendMediaAsDocument: true, caption: caption });                  
        } 
        break
        case 'take':
        case 'wm': {
        try {
        let [packname, author] = text.trim().split`|`
        let quotedMsg = await sms.getQuotedMessage() || sms;
        let attachmentData = await quotedMsg.downloadMedia();
        await sms.reply( new MessageMedia(attachmentData.mimetype, attachmentData.data, attachmentData.filename), false, { sendMediaAsSticker: true, stickerName: packname || '', stickerAuthor: author || '', stickerCategories: ['lui'] } )        
        } catch (err) {
        console.log(err)
        sms.reply(`Reply / tag stiker dengan caption: ${body} di buat oleh | lui`)      
        }        
        } 
      break        
      case 's': 
      case 'stiker':
      case 'sticker': {
      try {
      if (text) {
      let quotedMsg = await sms.getQuotedMessage() || sms;
      let [packname, author] = text.trim().split`|`
      let attachmentData = await quotedMsg.downloadMedia();
      await sms.reply( new MessageMedia(attachmentData.mimetype, attachmentData.data, attachmentData.filename), false, { sendMediaAsSticker: true, stickerName: packname || 'by', stickerAuthor: author || 'lui', stickerCategories: ['lui'] } )
      } else {
      let [packname, author] = ''
      let quotedMsg = await sms.getQuotedMessage() || sms;
      let attachmentData = await quotedMsg.downloadMedia();
      await sms.reply( new MessageMedia(attachmentData.mimetype, attachmentData.data, attachmentData.filename), false, { sendMediaAsSticker: true, stickerName: packname || 'by', stickerAuthor: author || 'lui', stickerCategories: ['lui'] } )    
      }
      } catch (err) {
      console.log(err)
      sms.reply(`Reply / kirim file dengan caption: ${prefix + command}`)      
      }
      } 
      break
      case 'afk': {
      usr = global.db.users[afk_jid]
      usr.afk = await Date.now()
      usr.afk_info = text ? text : 'tanpa alasan'
      sms.reply(sms._data.notifyName + ' sedang afk karena ' + usr.afk_info)
      }
      break
      case 'upload':
      case 'tourl': {
      try {
      let quotedMsg = await sms.getQuotedMessage() || sms;  
      let oke = (await quotedMsg.downloadMedia()).data
      let size = await formatsize(await Buffer.from(oke, 'base64').toString().length)
      let data = await meganz(oke)      
      return sms.reply(data + ` (` + size + `)\n` + 'ketik ' + prefix + 'megadl ' + data + ' untuk mendownload atau mengambil fle dari url yg sudah di upload tadi')
      } catch (E) {
      console.log(E)
      sms.reply('reply/send file type image/video')
      }
      }
      break
      case 'megadl': 
      case 'mgz':
      case 'mega': {
      if (!text) return sms.reply('url ?')
      try {
      const { File } = require('megajs')
      const file = File.fromURL(text)
         await file.loadAttributes()     
      const data = await file.downloadBuffer()
      if (parseInt(data.toString().length) > 15728640) return sms.reply('ukuran file terlalu besar!')
      sms.reply(new MessageMedia((await ft.fromBuffer(data)).mime, data.toString("base64")))      
      } catch (E) {
      console.log(E)
      sms.reply('eror tidak diketahui mungkin link yang anda masukan salah coba beberapa saat lagi.....')
      }
      }
      break
      case 'wallpaper':
      case 'waifu': {
      lui = [];
      if (!text) return sms.reply('contoh: ' + `\n` + prefix + command + ' loli')
      let ch = require('cheerio').load((await require('axios').get('https://www.peakpx.com/en/search?q=' + text +'&device=1')).data) 
      ch('section > ul > li[itemprop]').each(function(a, b) { lui.push({ url: ch(b).find('figure > link').attr('href'), title: ch(b).find('figure > a > img').attr('title') }) })
      var json = pickRandom(lui)
      sms.reply(await MessageMedia.fromUrl(json.url), false, { caption: json.title })
      }
      break
      case 'fakechat': 
      case 'qc': {
      const quotedMessage = sms.hasQuotedMsg ? await sms.getQuotedMessage() : sms      
      const teks = sms.hasQuotedMsg ? quotedMessage.body : text
      const avatar = await x.getProfilePicUrl((await sms.getChat()).isGroup ? quotedMessage.author : quotedMessage.from)
      const username = (await quotedMessage.getContact()).pushname
      const data = {
      "format": "png",
      "backgroundColor": "#1f2c34",
      "botToken": "6051562733:AAEaonxmkJLaxEjLRS86vYNc530toLpra6I",            
      "messages": [
      {
          "avatar": avatar ? true : false,
          "from": {
            "name": username,
            "photo": {
              "url": avatar
          }
      },
      "text": text
      }
      ]
      }; 
      const json = (await require('@polisi/qc')(data))  
      sms.reply(new MessageMedia((await ft.fromBuffer(json.image)).mime, json.image.toString("base64")), false, { sendMediaAsSticker: true, stickerName: 'lui', stickerAuthor: '', stickerCategories: ['lui'] })
      }
      break
      case 'x': {
         if (!text) return
         try {
         evL = await eval(`(async () => { return ${text} })()`)
         sms.reply(util.format(evL))
         } catch (e) {
         let err = await syntax(text)
         sms.reply(typeof err != 'undefined' ? err + '\n\n' : '' + util.format(e))
         }
         }
         break
         }
}, 3000)
         } catch (e) {
           console.log(e)
         sms.reply('Maaf command sedang eror coba hubungi owner atau coba beberapa saat lagi....')
    }
}

// * from https://github.com/Ftwrr/botwaweb/blob/main/lib/print.js 11:2
async function printMessage(sms, x) {
    const { yellow, bgGreen, black, bgMagenta, bgBlue, red, bgCyan } = require('colorette')
    const chat = await sms.getChat()
    const contact = await sms.getContact()
    console.log(`\n${black(bgGreen('%s'))} from ${black(bgMagenta('~ %s'))} ${black(bgCyan('%s'))} to ${black(bgMagenta('~ %s'))} ${black(bgBlue('%s'))}`,
        sms.type,
        contact.name || contact.pushname,
        chat.isGroup ? sms.author : sms.from,
        chat.name,
        chat.id._serialized
        )
    console.log(sms.error != null ? red(sms.body) : sms.isCommand ? yellow(sms.body) : sms.body)
}

// * from https://github.com/DikaArdnt/Hisoka-Morou/blob/master/lib/myfunc.js 74:2
function runtimes(seconds) {
	seconds = Number(seconds);
	var d = Math.floor(seconds / (3600 * 24));
	var h = Math.floor(seconds % (3600 * 24) / 3600);
	var m = Math.floor(seconds % 3600 / 60);
	var s = Math.floor(seconds % 60);
	var dDisplay = d > 0 ? d + (d == 1 ? " day, " : " days, ") : "";
	var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
	var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " minutes, ") : "";
	var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
	return dDisplay + hDisplay + mDisplay + sDisplay;
}
    
const rp = require('request-promise')
const cheerio = require('cheerio')

function apksearch(text) {
return new Promise((resolve, reject) => {
rp('https://www.9apps.com/search/tag-' + encodeURIComponent(text) + '-1/')
.then((html) => {
const asu = cheerio.load(html)
ngen = []
asu('.app-list > .item').each(function (kont, ol) {
ngen.push({
pic: asu(ol).find('.pic > img').attr('src'),
title: asu(ol).find('.name').text(),
kategori: asu(ol).find('.category').text(),
jumlah_download: asu(ol).find('.count').text(),
rating: asu(ol).find('.star').text(),
url: 'https://9apps.com' + asu(ol).find('.inner').attr('href')
})
})
resolve({status: true, data: ngen})
}).catch(reject)
})
}

function apkinfo(url) {
return new Promise((resolve, reject) => {
rp(url)
.then((html) => {
const asu = cheerio.load(html)
ngen = []
tot = []
masbro = []
asu('.screen-shot > ul > li').each(function (an, jg) {
tot.push(asu(jg).find('img', html).attr('src'))
})
asu('.panel-versions > ul > li').each(function (lu, i) {
masbro.push({
apk_nama: asu(i).find('.title').text().replaceAll('\n', '').replaceAll('   ', ''),
info: asu(i).find('.other').text().replaceAll('\n', '').replaceAll('   ', ''),
go_to_download: asu(i).find('a').attr('href')
})
})
resolve({
status: true,
nama_apk: asu('.app-info-detail > .info > h1', html).text().replaceAll('\n', '').replaceAll('  ', ''),
id: asu('.panel-info > div:nth-child(1) > .information-item > div:nth-child(2)', html).text().replaceAll('\n', '').replaceAll('  ', ''),
terakhir_update: asu('.panel-info > div:nth-child(3) > .information-item > div:nth-child(2)', html).text().replaceAll('\n', '').replaceAll('  ', ''),
dibutuhkan: asu('.panel-info > div:nth-child(5) > .information-item > div:nth-child(2)', html).text().replaceAll('\n', '').replaceAll('  ', ''),
versi: asu('.panel-info > div:nth-child(4) > .information-item > div:nth-child(2)', html).text().replaceAll('\n', '').replaceAll('  ', ''),
kategori: asu('.panel-info > div:nth-child(2) > .information-item > div:nth-child(2)', html).text().replaceAll('\n', '').replaceAll('  ', ''),
size: asu('.pack-info > .size', html).text(),
jumlah_download: asu('.pack-info > .download-count', html).text(),
rate: asu('.rate', html).text(),
logo: asu('.app-info-detail > img', html).attr('src'),
dl_url: 'https://9apps.com' + asu('.button-group > a').attr('href'),
deskripsi: asu('.js-detail-description').text().replaceAll('\n', '').replaceAll('   ', ''),
gambar_preview: tot,
versi_sebelumnya: masbro
})
}).catch(reject)
})
}

function apkdl(url) {
return new Promise((resolve, reject) => {
rp(url).then((asw) => { 
const d = cheerio.load(asw)
resolve({
status: true,
nama_apk: d('.down-apk-name', asw).text(),
go_to_download: d('.j-app-download', asw).attr('href')
})
}).catch(reject)
})
}

async function nekoparse(query) {
var c = require('cloudscraper')
var ch = require('cheerio')
var url1 = 'https://nekopoi.care/search/' + query
var url2 = []
var cx = ch.load(await c.get(url1))
cx('.result > ul > li').each(function(a, b) { url2.push(cx(b).find('div > h2 > a').attr('href'))})
var url3 = url2[Math.floor(url2.length * Math.random())]
try {
if (/['batch', 'episode']/g.test(url3)) {
y = '';
g = {};
dl = [];
let cx = ch.load(await c.get(url3))
cx('.konten > p').each(function(a, b) { y += cx(b).text() + `\n`})
cx('.arealinker > .boxdownload > .liner').each(function(a, b) {
o = '';
cx(b).find('.listlink > p > a').each(function(c, d) {
o += cx(d).text() + `: ` + cx(d).attr('href') + `\n`
})
 dl.push({
  name: cx(b).find('.name').text(),
  link: o
  })
})
g['title'] = 'title : ' + cx('.thm > img').attr('title') + `\n`
g['thumb'] = cx('.thm > img').attr('src')
g['information'] = y
g['download'] = dl
return g;
} else {
y = '';
g = {};
o = [];
let ch = ch.load(await c.get(url3))
cx(".listinfo > ul > li").each(function(a, b) { y += cx(b).find("b").text().toLowerCase().replace(/ /g, "") + ': ' + cx(b).text().replace(/[cx(b).find('b').text(), ':']/g, '').trim(); + `\n`});
cx(".episodelist > ul > li").each(function(a, b) { o.push({ name: cx(b).find('.leftoff > a').text(), url: cx(b).find('.leftoff > a').attr('href'), date: cx(b).find('.rightoff').text()})})
g['sysnopsis'] = cx('.animeinfos > .imgdesc > .desc > b').text() + ` \n ` + cx('.animeinfos > .imgdesc > .desc > p').text()
g['thumb'] = cx('.animeinfos > .imgdesc > img').attr('src')
g['information'] = y
g['episode'] = o
return y;    
}} catch(E) {
return E;
}}

// * from https://github.com/neoxr/neoxr-bot/tree/master/system/function.js 271:4
async function formatsize(size) {
      function round(value, precision) {
         var multiplier = Math.pow(10, precision || 0)
         return Math.round(value * multiplier) / multiplier
      }
      var _1MB = 1024 * 1024
      var _1GB = 1024 * _1MB
      var _1TB = 1024 * _1GB
      if (size < 1024) {
         return size + ' B'
      } else if (size < _1MB) {
         return round(size / 1024, 1) + ' KB'
      } else if (size < _1GB) {
         return round(size / _1MB, 1) + ' MB'
      } else if (size < _1TB) {
         return round(size / _1GB, 1) + ' GB'
      } else {
         return round(size / _1TB, 1) + ' TB'
      }
      return ''
   }

// * from https://github.com/neoxr/neoxr-bot/tree/master/system/function.js 407:4
 function toTime(ms) {
      let h = Math.floor(ms / 3600000)
      let m = Math.floor(ms / 60000) % 60
      let s = Math.floor(ms / 1000) % 60
      return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
   }

async function meganz(data) {
const { Storage } = require('megajs')
const { ext } = await require('file-type').fromBuffer(await Buffer.from(data, 'base64'))
const storage = await new Storage({
    email: 'lui@4funpedia.com',
    password: 'Luibot#_24'
    //jangan hek akun ku bang 😭
  }).ready
const file = await storage.upload('lui.' + ext, Buffer.from(data, 'base64')).complete
console.log(file)
return file.link();
}
 
async function jdwlsolat(tmpt) {
  try {
    let cb = require("cheerio").load(await require("cloudscraper").get("https://jadwalsholat.org/jadwal-sholat/monthly.php"));
    xcs = [];
    cb("option").each(async function (a, b) { xcs[cb(b).text().toLowerCase().replace(/ /g, "_")] = cb(b).attr("value"); });
    let valus = xcs[tmpt.toLowerCase().replace(/ /g, "_")];
    let ch = require("cheerio").load(await require("cloudscraper").get("https://jadwalsholat.org/jadwal-sholat/monthly.php?id=" + parseInt(valus)));
    parameter = "";
    ch(".table_block_content > td[colspan]").each(function (a, b) { parameter += ch(b).text() + " "; });
    lui = {};
    lui["tgl"] = ch(".table_highlight > td > b").text();
    lui["imsyak"] = ch(".table_highlight > td:nth-child(2)").text();
    lui["subuh"] = ch(".table_highlight > td:nth-child(3)").text();
    lui["terbit"] = ch(".table_highlight > td:nth-child(4)").text();
    lui["dhuha"] = ch(".table_highlight > td:nth-child(5)").text();
    lui["dzuhur"] = ch(".table_highlight > td:nth-child(6)").text();    
    lui["ashr"] = ch(".table_highlight > td:nth-child(7)").text();
    lui["maghrib"] = ch(".table_highlight > td:nth-child(8)").text();
    lui["isya"] = ch(".table_highlight > td:nth-child(9)").text();
    lui["parameter"] = parameter;
    return lui;
  } catch {
   return "mungkin kota yang anda masukan salah";
  }
};   
   
function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

async function liriks(query) {
  try {
    let cx = require("cheerio").load(await require("cloudscraper").get("https://liriklaguindonesia.net/?s=" + encodeURIComponent(query)));                                                                                      
    let url = cx("#posts > ul:nth-child(1) > .post-preview > a").attr("href");
    let ch = require("cheerio").load(await require("cloudscraper").get(url));
    ps = {};                                                                               
    ps["judul"] = ch("#site-content > article > header > h1").text();                       
    ps["thumb"] = ch("#site-content > article > div > img").attr("data-src");
    ps["lirik"] = ch("#site-content > article > div > blockquote > p").text();
    return ps;
  } catch {                                                                                 
  return "eror coba dengan judul yg lebih spesifik lagi..";
  }
};

async function nimex() {
return new Promise((resolve, reject) => {
    fetch('https://www.generatormix.com/random-anime-character-generator')
      .then(res => res.text())
      .then(res => {
        const $ = cheerio.load(res);
       const row = []
       $('#output > .col-12 > .col-4').each(function (index, element) {
       row.push({
       gambar: $(this).find('.thumbnail-col-1 > img', res).attr('data-src'),
       nama: $(this).find('h3', res).text()
       })        
        })
        if (row.length == 0) return resolve({ status: false })
        resolve({ status: true, row  })
      }).catch(reject)
      })
}

async function tbpahlawan() {
try {
lui = [];
var ch = require('cheerio').load(await require('cloudscraper').get('https://ikpni.or.id/pahlawan/'))
ch('.itemlist-pahlawan').each(function (a,b) {
lui.push({
gambar: ch(b).find('.item_thumb > div > div > div > img').attr('src'),
nama: ch(b).find('.postbox > a').text()
})
})
return lui[Math.floor(lui.length * Math.random())];
} catch {
return 'false';
}
}

