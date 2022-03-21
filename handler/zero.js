
//CREATOR SC + BASE ORI : ZERO YT7
//KLO MAU RECODE GK USAH HPUP CREATOR ORI TOLOL
//SKILL MODAL NYOLONG YT AJA BANGGA
//HARGA CREATOR GBLOK
//GK USH NGAKU² BUATAN LOf
//NAMBAH FITUR MASIH ERROR AJA SOK² AN NGAKU BIKINAN LO

//KLO MAU YG FULL NO ENC 100% BELI AJA
		
//FOLLOW SOSIAL MEDIA
//INSTAGRAM @Zero_YT7
//YOUTUBE Zero YT7
//TIKTOK @_zeroyt7
//GITHUB Zero-YT7


var {
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
var { color, bgcolor } = require('../mess/color')
var speed = require('performance-now')
var ggs = require('google-it')
var googleImage = require('g-i-s')
var { EmojiAPI } = require("emoji-api")
var emoji = new EmojiAPI()
var { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('../mess/myfunc')
var { fetchJson, kyun, fetchText } = require('../mess/fetcher')
var Exif = require('../mess/exif')
var exif = new Exif()
var request = require('request')
var translate = require('@vitalets/google-translate-api')
var fs = require('fs')
var hx = require("hxz-api")
var cheerio = require('cheerio')
var brainly = require('brainly-scraper')
var axios = require("axios")
var ffmpeg = require('fluent-ffmpeg')
var fetch = require('node-fetch')
var crypto = require('crypto')	
var yts = require('yt-search')
var Math_js = require('mathjs')
var { removeBackgroundFromImageFile } = require('remove.bg')
var moment = require('moment-timezone')
var { exec, spawn, execSync } = require('child_process')
fakeimg = fs.readFileSync('./img/zero.jpg')
fakethumb = fs.readFileSync('./img/thumbnail.jpg')
var { isLimit, limitAdd, getLimit, giveLimit, addBalance, kurangBalance, getBalance} = require("../mess/limit")
var { jadibot, stopjadibot, listjadibot } = require("../mess/jadibot")
var { upload, formatDate } = require('../mess/ytdl')
var { uptotele, uploadFile, RESTfulAPI, uploadImages } = require('../mess/uploadimage')

const { han } = require('../handler')
const tebakgambar = JSON.parse(fs.readFileSync('./storage/tebakgambar.json'))
const akinator = JSON.parse(fs.readFileSync('./storage/akinator.json'))
const antripdf = JSON.parse(fs.readFileSync('./storage/antripdf.json'))
const antriaudio = JSON.parse(fs.readFileSync('./storage/antriaudio.json'))
const antrivideo = JSON.parse(fs.readFileSync('./storage/antrivideo.json'))
const uang = JSON.parse(fs.readFileSync('./storage/balance.json'))
const simi = JSON.parse(fs.readFileSync('./storage/simi.json'))
const FormData = require('form-data')

async function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

//━━━━━━━━━━━━━━━[ STICKER FUNCTION ]━━━━━━━━━━━━━━━━━//

function addMetadata(packname, author) {	
	if (!packname) packname = 'BunnyWalker'; if (!author) author = 'Bot'; 
	author = author.replace(/[^a-zA-Z0-9]/g, '');
	let name = `${author}_${packname}`
	if (fs.existsSync(`./${name}.exif`)) return `./${name}.exif`
	const json = {
		"sticker-pack-name": packname,
		"sticker-pack-publisher": author,
	}
	const littleEndian = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00])
	const bytes = [0x00, 0x00, 0x16, 0x00, 0x00, 0x00]

	let len = JSON.stringify(json).length
	let last	

	if (len > 256) {	
		len = len - 256 
		bytes.unshift(0x01) 
	} else {	
		bytes.unshift(0x00) 
	}

	if (len < 16) { 
		last = len.toString(16) 
		last = "0" + len	
	} else {	
		last = len.toString(16) 
	}

	const buf2 = Buffer.from(last, "hex")
	const buf3 = Buffer.from(bytes) 
	const buf4 = Buffer.from(JSON.stringify(json))

	const buffer = Buffer.concat([littleEndian, buf2, buf3, buf4])

	fs.writeFile(`./${name}.exif`, buffer, (err) => {
		return `./${name}.exif` 
	})

}

//━━━━━━━━━━━━━━━[ END STICKER FUNCTION ]━━━━━━━━━━━━━━━━━//

// CORE
faketeks = '© BunnyWalker Advanced V3.0'
faketeks2 = '*_BunnyWalker-Bot Broadcast_*'
namo = 'BunnyWalker'
ator = 'BOT'
nano = '1122@s.whatsapp.net'
blocked = []
hit_today = []
multi = true
nopref = false
allpref = false

//━━━━━━━━━━━━━━━[ STORAGE ]━━━━━━━━━━━━━━━━━//

var welcome = JSON.parse(fs.readFileSync('./storage/welcome.json'))
var setting = JSON.parse(fs.readFileSync('./setting.json'))
var antilink = JSON.parse(fs.readFileSync('./storage/antilink.json'))
var config = JSON.parse(fs.readFileSync('./srv/config.js'))
var antivirtex = JSON.parse(fs.readFileSync('./storage/antivirtex.json'))
var nsfw = JSON.parse(fs.readFileSync('./storage/nsfw.json'))
var demo = JSON.parse(fs.readFileSync('./storage/demo.json'))
var pendaftar = JSON.parse(fs.readFileSync('./storage/user.json'))
var prem = JSON.parse(fs.readFileSync('./storage/premium.json'))
var alb = JSON.parse(fs.readFileSync('./storage/allowbot.json'))
var limit = JSON.parse(fs.readFileSync('./storage/limit.json'))
var balance = JSON.parse(fs.readFileSync('./storage/balance.json'))
var hit = JSON.parse(fs.readFileSync('./storage/totalcmd.json'))
var hit2 = JSON.parse(fs.readFileSync('./storage/totalcmdtoday.json'))
var _scommand = JSON.parse(fs.readFileSync("./storage/scommand.json"))
var event = JSON.parse(fs.readFileSync('./storage/event.json'))
var _truth = JSON.parse(fs.readFileSync('./storage/truth.json'))
var tde = fs.readFileSync('./img/truth.jpg')
var _dare = JSON.parse(fs.readFileSync('./storage/dare.json'))
var _menus = JSON.parse(fs.readFileSync('./storage/menus.json'))
var _genshin = JSON.parse(fs.readFileSync('./storage/genshin.json'))
var _nsfw = JSON.parse(fs.readFileSync('./storage/nsfwpic.json'))
var audionye = JSON.parse(fs.readFileSync('./storage/audio.json'))
var videonye = JSON.parse(fs.readFileSync('./storage/video.json'))
var setiker = JSON.parse(fs.readFileSync('./storage/stik.json'))
var imagenye = JSON.parse(fs.readFileSync('./storage/image.json'))

//━━━━━━━━━━━━━━━[ SETTING ]━━━━━━━━━━━━━━━━━//

NomorOwner = setting.NomorOwner
NomorBotOwner = setting.NomorBotOwner
NameBot = setting.NameBot
NameOwner = setting.NameOwner
limitCount = setting.limitCount
gcounti = setting.gcounti

//━━━━━━━━━━━━━━━━━[ APIKEYY ]━━━━━━━━━━━━━━━━━//

/*{
"Lolkey": "a3jhsgdac6sdjkfcd7sewjkd",
"Vhtear": "un23ec5xmn4wn82f0ukhz1vr",
"Xteam": "h9bg1er4b6ytcv3mc5f2zsta",
"Zeks": "u55uwo1ltg3ykgnxkco7et5z",
"Nurutomo": "5t1kk4atvvhz1wfbker048gl",
"Zero": "dsrla5m006s57xklbvzxk1t"
}*/

var lol = "260153ea4dfab79e14a9c7ae"
var lal = config.Xteam
var lil = config.Vhtear
var lul = config.Zeks
var lel = config.Zero
var rar = config.Nurutomo
var rir = config.Hunter

//━━━━━━━━━━━━━━━[ JAM ]━━━━━━━━━━━━━━━━━//

var time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')	
if(time2 < "23:59:00"){
	var ucapanWaktu = 'Good night'
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
var runtime = function (seconds) {
	seconds = Number(seconds);
	var d = Math.floor(seconds / (3600 * 24));
	var h = Math.floor((seconds % (3600 * 24)) / 3600);
	var m = Math.floor((seconds % 3600) / 60);
	var s = Math.floor(seconds % 60);
	var dDisplay = d > 0 ? d + (d == 1 ? " hari, " : " Hari, ") : "";
	var hDisplay = h > 0 ? h + (h == 1 ? " jam, " : " Jam, ") : "";
	var mDisplay = m > 0 ? m + (m == 1 ? " menit, " : " Menit, ") : "";
	var sDisplay = s > 0 ? s + (s == 1 ? " detik" : " Detik") : "";
	return dDisplay + hDisplay + mDisplay + sDisplay;
};

//━━━━━━━━━━━━━━━[ MODULE EXPORT ]━━━━━━━━━━━━━━━━━//
 
module.exports = zero = async (zero, zer) => {
	try {
		if (!zer.hasNewMessage) return
		zer = zer.messages.all()[0]
		if (!zer.message) return
		if (zer.key && !zer.key.remoteJid == 'status@broadcast') return
		global.blocked
		zer.message = (Object.keys(zer.message)[0] === 'ephemeralMessage') ? zer.message.ephemeralMessage.message : zer.message
		var typei = Object.keys(zer.message)[0]
		global.prefix
		var content = JSON.stringify(zer.message)
		var from = zer.key.remoteJid
		var type = Object.keys(zer.message)[0]
		var { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio } = MessageType
		var time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
		var datre = new Date().toLocaleDateString()
		var wib = moment.tz('Asia/Jakarta').format('HH : mm : ss')
		var wita = moment.tz('Asia/Makassar').format('HH : mm : ss')
		var wit = moment.tz('Asia/Jayapura').format('HH : mm :ss')

		var dates = moment().tz('Asia/Jakarta').format("YYYY-MM-DDTHH:mm:ss");
		var date = new Date(dates);
		var tahun = date.getFullYear();
		var bulan1 = date.getMonth();
		var tanggal = date.getDate();
		var hari = date.getDay();
		var haris = date.getDay();
		var jam = date.getHours();
		var menit = date.getMinutes();
		var detik = date.getSeconds();
		var waktoo = date.getHours();
		var cmd = (type === 'conversation' && zer.message.conversation) ? zer.message.conversation : (type == 'imageMessage') && zer.message.imageMessage.caption ? zer.message.imageMessage.caption : (type == 'videoMessage') && zer.message.videoMessage.caption ? zer.message.videoMessage.caption : (type == 'extendedTextMessage') && zer.message.extendedTextMessage.text ? zer.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
		if (multi){
			var prefix = /^[°zZ#$+,.?=''():√%!¢£¥€π¤ΠΦ_&`™©®Δ^βα~¦|/\\©^]/.test(cmd) ? cmd.match(/^[°zZ#$+,.?=''():√%¢£¥€π¤ΠΦ_&!`™©®Δ^βα~¦|/\\©^]/gi) : '.'
		} else {
			if (nopref){
				prefix = ','
			} else {
				if (allpref){
					var prefix = /^[°zZ#$@+,.?=''():√%!¢£¥€π¤ΠΦ_&><`™©®Δ^βα~¦|/\\©^]/.test(cmd) ? cmd.match(/^[°zZ#$@+,.?=''():√%¢£¥€π¤ΠΦ_&><!`™©®Δ^βα~¦|/\\©^]/gi) : ''
				} else {
					prefix = prefa
				}
			}
		}

		body = (type === 'conversation' && zer.message.conversation.startsWith(prefix)) ? zer.message.conversation : (type == 'imageMessage') && zer.message[type].caption.startsWith(prefix) ? zer.message[type].caption : (type == 'videoMessage') && zer.message[type].caption.startsWith(prefix) ? zer.message[type].caption : (type == 'extendedTextMessage') && zer.message[type].text.startsWith(prefix) ? zer.message[type].text : (type == 'listResponseMessage') && zer.message[type].singleSelectReply.selectedRowId ? zer.message[type].singleSelectReply.selectedRowId : (type == 'buttonsResponseMessage') && zer.message[type].selectedButtonId ? zer.message[type].selectedButtonId : ''
		var budo = (typei === 'conversation') ? zer.message.conversation : (typei === 'extendedTextMessage') ? zer.message.extendedTextMessage.text : ''
		var budy = (type === 'conversation') ? zer.message.conversation : (type === 'extendedTextMessage') ? zer.message.extendedTextMessage.text : ''
		var command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
		var args = body.trim().split(/ +/).slice(1)
		var isCmd = body.startsWith(prefix)
		var arg = budy.slice(command.length + 2, budy.length)
		var q = args.join(' ')
		var timestampi = speed();
		var totalchat = await zero.chats.all()
		var latensyi = speed() - timestampi
		hit_today.push(command);
		var pes = (type === 'conversation' && zer.message.conversation) ? zer.message.conversation : (type == 'imageMessage') && zer.message.imageMessage.caption ? zer.message.imageMessage.caption : (type == 'videoMessage') && zer.message.videoMessage.caption ? zer.message.videoMessage.caption : (type == 'extendedTextMessage') && zer.message.extendedTextMessage.text ? zer.message.extendedTextMessage.text : ''
		var messagesD = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
		var botNumber = zero.user.jid
		var Verived = "0@s.whatsapp.net"
		var num = "6285157740529@s.whatsapp.net"
		var ownerNumber = [`${NomorOwner}@s.whatsapp.net`]
		var ownerBotNumber = [`${NomorBotOwner}@s.whatsapp.net`,"6285157740529@s.whatsapp.net"]
		var ownerBotNumber2 = "6285820420446@s.whatsapp.net"
		var tescuk2 = ["6282337245566@s.whatsapp.net","6285820420446@s.whatsapp.net","6285719022825@s.whatsapp.net"]
		var isGroup = from.endsWith('@g.us')
		var sender = zer.key.fromMe ? zero.user.jid : isGroup ? zer.participant : zer.key.remoteJid
		var senderNumber = sender.split("@")[0] 
		var conts = zer.key.fromMe ? zero.user.jid : zero.contacts[sender] || { notify: jid.replace(/@.+/, '') }
		var pushname = zer.key.fromMe ? zero.user.name : conts.notify || conts.vname || conts.name || '-'
		var groupMetadata = isGroup ? await zero.groupMetadata(from) : ''
		var groupName = isGroup ? groupMetadata.subject : ''
		var groupId = isGroup ? groupMetadata.jid : ''
		var groupMembers = isGroup ? groupMetadata.participants : ''
		var groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
		var groupDesc = isGroup ? groupMetadata.desc : ''
		var groupOwner = isGroup ? groupMetadata.owner : ''
		var isOwner = ownerNumber.includes(sender)
		var isBotOwner = ownerBotNumber.includes(sender)
		var isBotOwner2 = ownerBotNumber2.includes(sender)
		var isUser = pendaftar.includes(sender)
		var isPremium = prem.includes(sender) || isOwner
		var isAllowBot = alb.includes(sender) || isOwner
		var isWelcome = isGroup ? welcome.includes(from) : false
		var isGroupAdmins = groupAdmins.includes(sender) || false
		var isBotGroupAdmins = groupAdmins.includes(botNumber) || false
		var isAntilink = isGroup ? antilink.includes(from) : false
		var isEventon = isGroup ? event.includes(from) : false
		var isAntivirtex = isGroup ? antivirtex.includes(from) : false
		var isNsfw = isGroup ? nsfw.includes(from) : false
		var isDemo = isGroup ? demo.includes(from) : false
		var isSimi = isGroup ? simi.includes(from) : false
		var isButton = (type == 'buttonsResponseMessage') ? zer.message.buttonsResponseMessage.selectedButtonId : ''
				
		//━━━━━━━━━━━━━━━[ MESSAGE ]━━━━━━━━━━━━━━━━━//
				
		mess = {
			wait: 'Mohon Tunggu... Sedang Proses',
			success: 'Done.',
			wrongFormat: 'Format salah, Silahkan Cek Lagi Di List Menu',
			error: {
				stick: 'Sticker Salah Mohon Coba Lagi',
				Iv: 'Link Error Silahkan Ganti Yg Lain'
			},
			only: {
				group: 'Khusus Di Group',
				bodmin: 'Jadikan Bot Admin Dulu',
				prem: 'Khusus Member Premium...',
				admin: 'Khusus Admin Group',
				event: 'Event Belum Aktif Di Group ini!!'
			}
		}

		//━━━━━━━━━━━━━━━[ CONNECTION ]━━━━━━━━━━━━━━━━━//
				
		var sendFileFromUrl = async(link, type, options) => {
			hasil = await getBuffer(link)
			zero.sendMessage(from, hasil, type, options).catch(e => {
				fetch(link).then((hasil) => {
					zero.sendMessage(from, hasil, type, options).catch(e => {
						zero.sendMessage(from, { url : link }, type, options).catch(e => {
							reply('_[ ! ] Error Gagal Dalam Mendownload Dan Mengirim Media_')
							console.log(e)
						})
					})
				})
			})
		}	
		var isUrl = (url) => {
			return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
		}
		var reply = (teks) => {
			zero.sendMessage(from, teks, text, {quoted:zer})
		}
		var sendMess = (hehe, teks) => {
			zero.sendMessage(hehe, teks, text)
		}
		var mentions = (teks, memberr, id) => {
			(id == null || id == undefined || id == false) ? zero.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : zero.sendMessage(from, teks.trim(), extendedText, { quoted: ftrol, contextInfo: { "mentionedJid": memberr } })
		}
		var costum = (pesan, tipe, target, target2) => {
			zero.sendMessage(from, pesan, tipe, { quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target2}` } } })
		} 
						
		zero.chatRead(from, "read")
		//zero.chatRead(jid)

		var sotoy = [
			'🍊 : 🍒 : 🍐',
			'🍒 : 🔔 : 🍊',
			'🍇 : 🍇 : 🍐',
			'🍊 : 🍋 : 🔔', //ANKER
			'🔔 : 🍒 : 🍐',
			'🔔 : 🍒 : 🍊',
			'🍊 : 🍋 : 🔔',				
			'🍐 : 🍒 : 🍋',
			'🍐 : 🍒 : 🍐',
			'🍊 : 🍒 : 🍒',
			'🔔 : 🔔 : 🍇',
			'🍌 : 🍌 : 🔔',
			'🍐 : 🔔 : 🔔',
			'🍊 : 🍋 : 🍒',
			'🍋 : 🍋 : 🍋 Win👑',
			'🔔 : 🔔 : 🍇',
			'🔔 : 🍇 : 🍇', 
			'🔔 : 🍐 : 🔔',
			'🍌 : 🍌 : 🍌 Win👑'
		]
						
		var premi = 'Basic User'
		if (isPremium) {
			premi = 'Premiun User'
		} 
		if (isOwner) {
			premi = 'This Is Owner'
		}
					
		const cmdadd = () => {
			hit[0].totalcmd += 1
			fs.writeFileSync('./storage/totalcmd.json', JSON.stringify(hit))
		}
		if (isCmd) cmdadd()
		const totalhit = JSON.parse(fs.readFileSync('./storage/totalcmd.json'))[0].totalcmd

		const cmdaddtoday = () => {
			hit2[0].totalcmdtoday += 1
			fs.writeFileSync('./storage/totalcmdtoday.json', JSON.stringify(hit2))
		}
		if (isCmd) cmdaddtoday()
		const totalhittoday = JSON.parse(fs.readFileSync('./storage/totalcmdtoday.json'))[0].totalcmdtoday
						
		function ranNumb(min, max = null) {
			if (max !== null) {
				min = Math.ceil(min);
				max = Math.floor(max);
				return Math.floor(Math.random() * (max - min + 1)) + min;
			} else {
				return Math.floor(Math.random() * min) + 1
			}
		}

		function padLead(num, size) {
			var s = num+"";
			while (s.length < size) s = "0" + s;
			return s;
		}
				
		const addCmd = (id, command) => {
			const obj = { id: id, chats: command };
			_scommand.push(obj);
			fs.writeFileSync("./storage/scommand.json", JSON.stringify(_scommand));
		};

		const getCommandPosition = (id) => {
			let position = null;
			Object.keys(_scommand).forEach((i) => {
				if (_scommand[i].id === id) {
					position = i;
				}
			});
			if (position !== null) {
				return position;
			}
		};

		const getCmd = (id) => {
			let position = null;
			Object.keys(_scommand).forEach((i) => {
				if (_scommand[i].id === id) {
					position = i;
				}
			});
			if (position !== null) {
				return _scommand[position].chats;
			}
		};

		const checkSCommand = (id) => {
			let status = false;
			Object.keys(_scommand).forEach((i) => {
				if (_scommand[i].id === id) {
					status = true;
				}
			});
			return status;
		};

		//━━━━━━━━━━━━━━━[ FAKE ]━━━━━━━━━━━━━━━━━//

		var ftrol = {
			key : {
				participant : '0@s.whatsapp.net'
			},
			message: {
				orderMessage: {
					itemCount : 169,
					status: 1,
					surface : 1,
					message: `${NameBot}`, 
					orderTitle: `${NameBot}`,
					thumbnail: fakethumb,
					sellerJid: '0@s.whatsapp.net' 
				}
			}
		}

		//━━━━━━━━━━━━━━━[ BUTTON ]━━━━━━━━━━━━━━━━━//

		var sendButMessage = (id, text1, desc1, but = [], options = {}) => {
			var buttonMessage = {
				contentText: text1,
				footerText: desc1,
				buttons: but,
				headerType: 1,
			};
			zero.sendMessage(
				id,
				buttonMessage,
				MessageType.buttonsMessage,
				options
			)
		}

		const sendButImage = async (id, text1, desc1, gam1, but = [], options = {}) => {
	        kma = gam1;
	        mhan = await zero.prepareMessage(id, kma, MessageType.image);
	        buttonMessages = {
	            imageMessage: mhan.message.imageMessage,
	            contentText: text1,
	            footerText: desc1,
	            buttons: but,
	            headerType: 4,
	        }
	        zero.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
	    }

		var sendButVideo = async(id, text1, desc1, vid1, but = [], options = {}) => {
			them = vid1
			mediaxxaa = await zero.prepareMessage(id, them, MessageType.video)
			vimhan = mediaxxaa.message["ephemeralMessage"] ? mediaxxaa.message.ephemeralMessage : mediaxxaa
			var buttonMessages = {
				videoMessage: vimhan.message.videoMessage,
				contentText: text1,
				footerText: desc1,
				buttons: but,
				headerType: 5
			}
			zero.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
		}

		async function sendButLocation(id, text1, desc1, gam1, but = [], options = {}) {
			let buttonMessages = { locationMessage: { jpegThumbnail: gam1 }, contentText: text1, footerText: desc1, buttons: but, headerType: 6 }
			return zero.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
		}

		async function sendButMenus(id, text1, desc1, gam1, but = [], options = {}) {
			//const tesmenu = _menus[Math.floor(Math.random() * _menus.length)]
			//nais = await getBuffer(tesmenu)
			meh = padLead(ranNumb(43), 3)
			nais = fs.readFileSync(`./picbot/menus/menus_${meh}.jpg`)
			let buttonMessages = { locationMessage: { jpegThumbnail: nais }, contentText: text1, footerText: desc1, buttons: but, headerType: 6 }
			return zero.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
		}

		async function sendButGenshin(id, text1, desc1, gam1, but = [], options = {}) {
			//const tesmenu = _genshin[Math.floor(Math.random() * _genshin.length)]
			//nais = await getBuffer(tesmenu)
			meh = padLead(ranNumb(39), 3)
			nais = fs.readFileSync(`./picbot/genshin/genshin_${meh}.jpg`)
			let buttonMessages = { locationMessage: { jpegThumbnail: nais }, contentText: text1, footerText: desc1, buttons: but, headerType: 6 }
			return zero.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
		}

		async function sendButNsfw(id, text1, desc1, gam1, but = [], options = {}) {
			//const tesmenu = _nsfw[Math.floor(Math.random() * _nsfw.length)]
			//nais = await getBuffer(tesmenu)
			meh = padLead(ranNumb(20), 3)
			nais = fs.readFileSync(`./picbot/nsfw/nsfw_${meh}.jpg`)
			let buttonMessages = { locationMessage: { jpegThumbnail: nais }, contentText: text1, footerText: desc1, buttons: but, headerType: 6 }
			return zero.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
		}

		async function sendButYtdl(id, text1, desc1, gam1, but = [], options = {}) {
			gambar = await getBuffer(get_result.thumbnail)
			let buttonMessages = { locationMessage: { jpegThumbnail: gambar }, contentText: text1, footerText: desc1, buttons: but, headerType: 6 }
			return zero.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
		}

		async function sendButYtPlay(id, text1, desc1, gam1, but = [], options = {}) {
			gambar = await getBuffer(get_result.info.thumbnail)
			let buttonMessages = { locationMessage: { jpegThumbnail: gambar }, contentText: text1, footerText: desc1, buttons: but, headerType: 6 }
			return zero.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
		}

		async function sendButJoox(id, text1, desc1, gam1, but = [], options = {}) {
			gambar = await getBuffer(get_result.image)
			let buttonMessages = { locationMessage: { jpegThumbnail: gambar }, contentText: text1, footerText: desc1, buttons: but, headerType: 6 }
			return zero.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
		}

		//━━━━━━━━━━━━━━━[ CONNECTION 2 ]━━━━━━━━━━━━━━━━━//

		var sendStickerFromUrl = async(to, url) => {
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
					zero.sendMessage(to, media, MessageType.sticker,{quoted:zer})
					fs.unlinkSync(filess)
					fs.unlinkSync(asw)
				});
			});
		}
		var sendMediaURL = async(to, url, text="", mids=[]) =>{
			if(mids.length > 0){
			text = normalizeMention(to, text, mids)
			}
			var fn = Date.now() / 10000;
			var filename = fn.toString()
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
				zero.sendMessage(to, media, type, { quoted: zer, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
				fs.unlinkSync(filename)
			});
		}

		//━━━━━━━━━━━━━━━[ GROUP PARTICIPANT ]━━━━━━━━━━━━━━━━━//

		/*zero.on('group-participants-update', async (anu) => {
			if (!isWelcome) return
			try {
				const mdata = await zero.groupMetadata(anu.jid)
				console.log(anu)
				if (anu.action == 'add') {
					num = anu.participants[0]
					try {
						pp_user = await zero.getProfilePicture(num)
					} catch {
						pp_user = 'https://i.ibb.co/2ZhLgWQ/tetot.jpg'
					}
					teks = `Hallo @${num.split('@')[0]}\nSelamat Datang Di Group: *${mdata.subject}*\n\nSemoga Betah Ya Di Group Ini`
					let buff = await getBuffer(pp_user)
					zero.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
				} else if (anu.action == 'remove') {
					num = anu.participants[0]
					try {
						pp_user = await zero.getProfilePicture(num)
					} catch {
						pp_user = 'https://i.ibb.co/2MJfpv0/Sayonara-no-Asa.jpg'
					}
					teks = `Menyerah pada rindu karena tidak mungkin mengembalikan waktu.\n*Sayonara 👋🏻* @${num.split('@')[0]} 🍻`
					let buff = await getBuffer(pp_user)
					zero.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
				}
			} catch (e) {
				console.log(e)
			}
		})*/

		//━━━━━━━━━━━━━━━[ MESSAGE GROUP ]━━━━━━━━━━━━━━━━━//

		var kuis = false

		if (isGroup && isAntilink && !zer.key.fromMe) {
			if (budy.includes("://chat.whatsapp.com/")) {
				if (isGroupAdmins) return reply("admin bebas")
				if (isOwner) return reply("owner bebas")
				reply("ANTILINK DETECTED!! Maaf Kamu Dikick Dari Group")
				zero.groupRemove(from, [sender]);
			}
		}
		/*if (budy.length > 4000) {
			if (!isGroup) return
			if (!isAntivirtex) return
			if (isGroupAdmins) return
			reply('Tandai telah dibaca\n'.repeat(3))
			reply(`「 VIRTEX DETECTED!! 」\n\nKamu Mengirimkan Virus, Maaf Kamu Di Kick Dari Group :(`)
			console.log(color('[KICK]', 'red'), color('Received a virus text!', 'yellow'))
			zero.groupRemove(from, [sender])
		}*/	 

		//━━━━━━━━━━━━━━━[ MEDIA ]━━━━━━━━━━━━━━━━━//
								
		colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
		var isMedia = (type === 'imageMessage' || type === 'videoMessage')
		var isMediaStik = (type === 'stickerMessage')
		var isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		var isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		var isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		var isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
		if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
		if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))

		//━━━━━━━━━━━━━━━[ FITURNYA ]━━━━━━━━━━━━━━━━━//

	
		//━━━━━━━━━━━━━━━[ AKINATOR ]━━━━━━━━━━━━━━━━━//
		if (akinator.hasOwnProperty(sender.split('@')[0]) && !isCmd && ["0", "1", "2", "3", "4", "5"].includes(body)) {
			kuis = true
			var { server, frontaddr, session, signature, question, step } = akinator[sender.split('@')[0]]
			if (step == "0" && budy == "5") return reply("Maaf Anda telah mencapai pertanyaan pertama")
			var ini_url = `https://api.lolhuman.xyz/api/akinator/answer?apikey=${lol}&server=${server}&frontaddr=${frontaddr}&session=${session}&signature=${signature}&answer=${budy}&step=${step}`
			var get_result = await fetchJson(ini_url)
			var get_result = get_result.result
			if (get_result.hasOwnProperty("name")) {
				var ini_name = get_result.name
				var description = get_result.description
				var ini_image = get_result.image
				var ini_image = await getBuffer(ini_image)
				ini_txt = `${ini_name} - ${description}\n\n`
				ini_txt += "Sekian dan terima kasih"
				await zero.sendMessage(from, ini_image, image, { quoted: zer, caption: ini_txt }).then(() => {
					delete akinator[sender.split('@')[0]]
					fs.writeFileSync("./storage/akinator.json", JSON.stringify(akinator))
				})
				return
			}
			var { question, _, step } = get_result
			ini_txt = `${question}\n\n`
			ini_txt += "0 - Ya\n"
			ini_txt += "1 - Tidak\n"
			ini_txt += "2 - Saya Tidak Tau\n"
			ini_txt += "3 - Mungkin\n"
			ini_txt += "4 - Mungkin Tidak\n"
			ini_txt += "5 - Kembali ke Pertanyaan Sebelumnya"
			if (budy == "5") {
				var ini_url = `https://api.lolhuman.xyz/api/akinator/back?apikey=${lol}&server=${server}&frontaddr=${frontaddr}&session=${session}&signature=${signature}&answer=${budy}&step=${step}`
				var get_result = await fetchJson(ini_url)
				var get_result = get_result.result
				var { question, _, step } = get_result
				ini_txt = `${question}\n\n`
				ini_txt += "0 - Ya\n"
				ini_txt += "1 - Tidak\n"
				ini_txt += "2 - Saya Tidak Tau\n"
				ini_txt += "3 - Mungkin\n"
				ini_txt += "4 - Mungkin Tidak"
				ini_txt += "5 - Kembali ke Pertanyaan Sebelumnya"
			}
			await zero.sendMessage(from, ini_txt, text, { quoted: zer }).then(() => {
				const data_ = akinator[sender.split('@')[0]]
				data_["question"] = question
				data_["step"] = step
				akinator[sender.split('@')[0]] = data_
				fs.writeFileSync("./storage/akinator.json", JSON.stringify(akinator))
			})
		}

		//━━━━━━━━━━━━━━━[ AKINATOR ]━━━━━━━━━━━━━━━━━//



		switch (command) {
			case 'menu': case 'help':
				groups = zero.chats.array.filter(v => v.jid.endsWith('g.us'))
				privatc = zero.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
				menu =` Hello *${pushname}*, ${ucapanWaktu}

⦿ Status User : ${premi}
⦿ Limit User : ${isOwner ? 'Unlimited' : isPremium ? 'Unlimited' : getLimit(sender, limitCount, limit)}
⦿ Uang User : Rp. ${(getBalance(sender, balance))}\n
━ ━ ━ ━ *「 BOT INFO 」* ━ ━ ━ ━
⦿ Group Total : ${groups.length} Group Chat
⦿ Private Chat : ${privatc.length} Chat
⦿ Total Chat : *${totalchat.length}*
⦿ Total Pengguna : ${limit.length} User
⦿ Command Today : ${totalhittoday.toFixed(0)} Hit
⦿ Total Command : ${totalhit} Hit

Jika button tidak muncul, ketik *.allmenu*`
				but = [{ buttonId: `allmenu`, buttonText: { displayText: 'ALL MENU' }, type: 1 },{ buttonId: `owner`, buttonText: { displayText: 'OWNER' }, type: 1 }]
				sendButMenus(from, menu, faketeks, fakeimg, but)
				break
			case 'allmenu':
			case 'listmenu':
				allmenu =`╔═══ *「 ${NameBot} 」* 
║
║⧐ ⸨ *${prefix}owner* ⸩
║⧐ ⸨ *${prefix}info* ⸩
║⧐ ⸨ *${prefix}rules* ⸩
╠═════════════════❍
║⧐ *Total Pengguna : ${limit.length}*
╚═════════════════════

╭───「 *PROFILMU* 」
├ • Nama	: ${pushname}
├ • Status : ${premi}
├ • Limit	: ${isOwner ? 'Unlimited' : isPremium ? 'Unlimited' : getLimit(sender, limitCount, limit)}
├ • Uang : Rp. ${(getBalance(sender, balance))}
│
`
				
				but = [{ buttonId: `owner`, buttonText: { displayText: 'OWNER' }, type: 1 },{ buttonId: `donasi`, buttonText: { displayText: 'SUPPORT' }, type: 1 }]
				if (!isGroup && !isPremium) {
					sendButMenus(from, allmenu + han.menus(prefix, NameBot), faketeks, fakeimg, but)
					zero.sendMessage(from,`Untuk melihat list command apa saja yang work dalam private chat, ketik *${prefix}privatecmd*`, text)
				} else {
					sendButMenus(from, allmenu + han.menus(prefix, NameBot), faketeks, fakeimg, but)
				}
				break
			case 'privatcmd':
			case 'privatecmd':
				if (!isGroup && !isPremium) {
					reply(han.privcmd(prefix))
				} else if (isPremium) {
					reply('*Premium User* : All features unlocked')
				} else {
					reply(`All features should be work, contact the Owner if there's any error.`)
				}
				break
			case 'genshinmenu':
			case 'menugenshin':
				but = [{ buttonId: `owner`, buttonText: { displayText: 'OWNER' }, type: 1 },{ buttonId: `donasi`, buttonText: { displayText: 'SUPPORT' }, type: 1 }]
				sendButGenshin(from, han.menugenshin(prefix, NameBot), faketeks, fakeimg, but)
				break
			case 'menunsfw':
			case 'nsfwmenu':
				if (!isGroup && !isPremium) {
					but = [{ buttonId: `owner`, buttonText: { displayText: 'OWNER' }, type: 1 },{ buttonId: `donasi`, buttonText: { displayText: 'SUPPORT' }, type: 1 }]
					sendButNsfw(from, han.menunsfw(prefix, NameBot), faketeks, fakeimg, but)
					reply(`The only command work for private chat is *${prefix}nekonsfw*`)
				} else {
					if (!isNsfw) return reply(`*NSFW GAK AKTIF*\n\nAktifkan lewat *${prefix}nsfw*`)
					but = [{ buttonId: `owner`, buttonText: { displayText: 'OWNER' }, type: 1 },{ buttonId: `donasi`, buttonText: { displayText: 'SUPPORT' }, type: 1 }]
					sendButNsfw(from, han.menunsfw(prefix, NameBot), faketeks, fakeimg, but)
				}
				break
			case 'menuanime':
			case 'animemenu':
				if (!isGroup && !isPremium) {
					but = [{ buttonId: `owner`, buttonText: { displayText: 'OWNER' }, type: 1 },{ buttonId: `donasi`, buttonText: { displayText: 'SUPPORT' }, type: 1 }]
					sendButLocation(from, han.menuanime(prefix, NameBot), faketeks, fakeimg, but)
					reply(`The only command work for private chat is *${prefix}neko2*`)
				} else {
					but = [{ buttonId: `owner`, buttonText: { displayText: 'OWNER' }, type: 1 },{ buttonId: `donasi`, buttonText: { displayText: 'SUPPORT' }, type: 1 }]
					sendButLocation(from, han.menuanime(prefix, NameBot), faketeks, fakeimg, but)	
				}
				break
			case 'menuoxy':
			case 'oxymenu':
				but = [{ buttonId: `owner`, buttonText: { displayText: 'OWNER' }, type: 1 },{ buttonId: `donasi`, buttonText: { displayText: 'SUPPORT' }, type: 1 }]
				sendButLocation(from, han.menuoxy(prefix, NameBot), faketeks, fakeimg, but)
				break
			case 'menuephoto':
			case 'ephotomenu':
				but = [{ buttonId: `owner`, buttonText: { displayText: 'OWNER' }, type: 1 },{ buttonId: `donasi`, buttonText: { displayText: 'SUPPORT' }, type: 1 }]
				sendButLocation(from, han.menuephoto(prefix, NameBot), faketeks, fakeimg, but)
				break
			case 'menueditor':
			case 'editormenu':
				but = [{ buttonId: `owner`, buttonText: { displayText: 'OWNER' }, type: 1 },{ buttonId: `donasi`, buttonText: { displayText: 'SUPPORT' }, type: 1 }]
				sendButLocation(from, han.menueditor(prefix, NameBot), faketeks, fakeimg, but)
				break
			case 'menutextpro':
			case 'textpromenu':
				but = [{ buttonId: `owner`, buttonText: { displayText: 'OWNER' }, type: 1 },{ buttonId: `donasi`, buttonText: { displayText: 'SUPPORT' }, type: 1 }]
				sendButLocation(from, han.menutextpro(prefix, NameBot), faketeks, fakeimg, but)
				break
			case 'menudownload':
			case 'downloadmenu':
				but = [{ buttonId: `owner`, buttonText: { displayText: 'OWNER' }, type: 1 },{ buttonId: `donasi`, buttonText: { displayText: 'SUPPORT' }, type: 1 }]
				sendButLocation(from, han.menudownloader(prefix, NameBot), faketeks, fakeimg, but)
				break
			case 'menugrup':
			case 'grupmenu':
			case 'menugroup':
			case 'groupmenu':
				but = [{ buttonId: `owner`, buttonText: { displayText: 'OWNER' }, type: 1 },{ buttonId: `donasi`, buttonText: { displayText: 'SUPPORT' }, type: 1 }]
				sendButLocation(from, han.menugroup(prefix, NameBot), faketeks, fakeimg, but)
				break
			case 'changelog':
				but = [{ buttonId: `owner`, buttonText: { displayText: 'OWNER' }, type: 1 },{ buttonId: `donasi`, buttonText: { displayText: 'SUPPORT' }, type: 1 }]
				sendButLocation(from, han.changelog(prefix, NameBot), faketeks, fakeimg, but)
				break
			case 'rules':
				sendButMessage(from, han.rules(), `Baca rulesnya!, Jangan di baca doang, Patuhi juga ajg❗`, [{buttonId: `${prefix}menu`,buttonText: {displayText: `💾 MENU `,},type: 1,},])
				break

			case 'owner':
			case 'creator':
				let inilist = []
				for (let i of ownerNumber) {
					let vname = zero.contacts[i] != undefined ? zero.contacts[i].vname || zero.contacts[i].notify : undefined
					inilist.push({
						"displayName": 'BunnyWalker',
						"vcard": 'BEGIN:VCARD\n'
						+ 'VERSION:3.0\n'
						+ `FN:${NameOwner}\n`
						+ `ORG: Creator ${NameBot} ;\n`
						+ `TEL;type=CELL;type=VOICE;waid=${NomorOwner}:${NomorOwner}\n`
						+ 'END:VCARD'.trim()
					})
				}
				hehe = await zero.sendMessage(from, {
					"displayName": `${inilist.length} kontak`,
					"contacts": inilist 
				}, 'contactsArrayMessage', { quoted: zer })
				break
			/*case 'owner2':
				vcard3 = 'BEGIN:VCARD\n' +
				'VERSION:3.0\n' +
				'N:Sy;Bot;;;\n' +
				`FN: ${NameOwner}\n` +
				`item1.TEL;waid=${ownerNumber}:${ownerNumber}\n` +
				`item1.X-ABLabel:👑 Creator\n` +
				`item2.EMAIL;type=INTERNET:azamimylaifu@gmail.com\n` +
				`item2.X-ABLabel:📧 Email\n` +
				//`item3.URL:https://youtube.com/c/DEFFBOTZZ/\n` +
				//`item3.X-ABLabel:⚙️ Channel Owner\n` +
				`item3.ADR:;;🇮🇩 Indonesia;;;;\n` +
				`item3.X-ABADR:ac\n` +
				`item4.X-ABLabel:🌍 Region\n` +
				`item4.X-ABLabel:☯ BunnyWalker Owner\n` +
				'END:VCARD'.trim()
				zero.sendMessage(from, {displayName: `${NameOwner}`, vcard: vcard3}, contact,) 
				break*/
			case 'info':
			case 'ingfo':
			case 'status':
				timestamp = speed()
				latensi = speed() - timestamp
				teks =
				`┏━➤ *INFO BOT*\n*┃┃* Modded by : ${NameOwner}\n*┃┃* Nama Bot : ${NameBot}\n*┃┃* Prefix : Multi Prefix\n*┃┃* Total Pengguna : ${limit.length}\n*┃┃* Speed : ${latensi.toFixed(4)} second\n*┃┃* Language : Javascript\n*┃┗━━━━━━━━*\n*┃*\n*┃◗ Runtime : ${runtime(process.uptime())}*\n*┗━━━━━━━ •*`
				but = [{ buttonId: `donasi`, buttonText: { displayText: '🙏 SUPPORT' }, type: 1 },{ buttonId: `owner`, buttonText: { displayText: '👥 OWNER' }, type: 1 }]
				sendButLocation(from, teks, faketeks, fakeimg, but)
				break

			case 'limit':
				if (!isGroup) return reply(han.groupo())
				if (args.length != 0) return reply(han.noneed())
				reply(`\n*「 LIMIT USER 」*\nsisa limit anda : ${isOwner ? '*Unlimited*' : isPremium ? 'Unlimited' : getLimit(sender, limitCount, limit)}\n\n🍻 NOTE : untuk mendapatkan limit bisa lewat *${prefix}buylimit* 🍻`)
				break
			case 'lb':
			case 'leaderboard':
				if (!isGroup) return reply(han.groupo())
				if (args.length != 0) return reply(han.noneed())
				reply('*「 LEVELING IS DISABLED 」*')
				break
			case 'level':
				dahlah = `Tidak ada level dalam bot ini\nKetik *${prefix}menu* untuk melihat profilmu.\n`
				sendButMessage(from, dahlah, `Silahkan Pilih Salah Satu`, [{buttonId: `menu`,buttonText: {displayText: `MENU`,},type: 1,},{buttonId: `donasi`,buttonText: {displayText: `DAHLAH MALES`,},type: 1,},])
				break

			// GROUP MENU
			case 'sewabot':
			case 'jadibot':
				zero.sendMessage(from, `*15K / Bln*\nSilahkan Chat Owner.`, text, { quoted: zer } )
				break
			case 'donasi':
			case 'donate':
			case 'support':
				zero.sendMessage(from, han.donasi(NameBot), text)
				break
			case 'speed':
			case 'speedbot':
			case 'ping':
				reply(`Speed : ${latensyi.toFixed(4)} Second`)
				break
			case 'runtime':
				teks = `*Bot aktif selama :*\n\n*${runtime(process.uptime())}*`
				reply(teks)
				break
			case 'test':
			case 'tes':
				teks = `Ping : _${latensyi.toFixed(4)} detik_\n\nBot Aktif Selama :\n*${runtime(process.uptime())}*`
				reply(teks)
				break
			case 'buylimit':
				if (!isGroup) return reply(han.groupo())
				if (args.length < 1) return reply(`Example: ${prefix + command} 2`)
				if (q.includes('-') || q.includes('+')) return reply('Nominal Invalid...')
				if (isNaN(args[0])) return reply('limit harus angka')
				payout = body.slice(10)
				let ane = 150 * payout
				if (getBalance(sender, balance) < ane) return reply(`Balance kamu tidak mencukupi untuk pembelian ini`)
				kurangBalance(sender, ane, balance)
				giveLimit(sender, parseInt(args[0]), limit)
				reply(`Pembeliaan limit sebanyak ${args[0]} berhasil\n\nSisa Balance : Rp. ${(getBalance(sender, balance))}\nSisa Limit : ${getLimit(sender, limitCount, limit)}/${limitCount}`)
				break
			/*case 'daily':
				if (!isGroup) return reply(han.groupo())
				if (!isOwner) return reply(han.ownerb())
				if (args.length != 0) return reply(han.noneed())
				payout = ranNumb(20, 40)
				hit2[0].totalcmdtoday = payout
				fs.writeFileSync('./storage/totalcmdtoday.json', JSON.stringify(hit2))
				reply(`Sukses.\nDaily Start = ${payout}`)
				break*/
			case 'dailyc':
				if (!isGroup) return reply(han.groupo())
				if (!isOwner) return reply(han.ownerb())
				if (args.length < 1) return reply(`Example: ${prefix + command} 2`)
				if (q.includes('-') || q.includes('+')) return reply('Invalid number...')
				if (isNaN(args[0])) return reply('harus angka')
				payout = Math.floor(body.slice(8))
				hit2[0].totalcmdtoday = payout
				fs.writeFileSync('./storage/totalcmdtoday.json', JSON.stringify(hit2))
				reply(`Sukses.\nDaily Start = ${payout}`)
				break
			case 'antilink':
				if (!isGroup) return reply(han.groupo())
				if (!isGroupAdmins) return reply(han.admin())
				if (!isBotGroupAdmins) return reply(han.badmin())
				if (Number(args[0]) === 1) {
					if (isAntilink) return reply('UDAH NYALA KAK')
					antilink.push(from)
					fs.writeFileSync("./storage/antilink.json", JSON.stringify(antilink))
					reply('SUKSES MENGAKTIFKAN ANTILINK GROUP')
					zero.sendMessage(from,`*ALLERT!!!*\n\nJika bukan admin, akan di kick apabila mengirim link grup`, text)
				} else if (Number(args[0]) === 0) {
					if (!isAntilink) return reply('EMANG AKTIF?')
					antilink.splice(from, 1)
					fs.writeFileSync("./storage/antilink.json", JSON.stringify(antilink))
					reply('SUKSES MEMATIKAN ANTILINK GROUP')
				} else if (!q) {
					sendButMessage(from, `*「ANTILINK GROUP」*\n\nKetik *${prefix}antilink 1* apabila tombol tidak muncul/berfungsi.\n`, `Silahkan Pilih Salah Satu`, [{buttonId: `antilink 1`,buttonText: {displayText: `📌 ON`,},type: 1,},{buttonId: `antilink 0`,buttonText: {displayText: `📌 OFF`,},type: 1,},])}
				break
			case 'nsfw':
				if (!isGroup) return reply(han.groupo())
				if (!isGroupAdmins) return reply(han.admin())
				if (!isBotGroupAdmins) return reply(han.badmin())
				if (Number(args[0]) === 1) {
					if (isNsfw) return reply('UDAH AKTIF KAK')
					nsfw.push(from)
					fs.writeFileSync("./storage/nsfw.json", JSON.stringify(nsfw))
					reply('SUKSES MENGAKTIFKAN NSFW GROUP')
					zero.sendMessage(from,`*LEWD TIME!!!*`, text)
				} else if (Number(args[0]) === 0) {
					if (!isNsfw) return reply('EMANG AKTIF?')
					nsfw.splice(from, 1)
					fs.writeFileSync("./storage/nsfw.json", JSON.stringify(nsfw))
					reply('SUKSES MEMATIKAN NSFW GROUP')
				} else if (!q) {
					sendButMessage(from, `*「MODE NSFW」*\n\nKetik *${prefix}nsfw 1* apabila tombol tidak muncul/berfungsi.\n`, `Silahkan Pilih Salah Satu`, [{buttonId: `nsfw 1`,buttonText: {displayText: `📌 ON`,},type: 1,},{buttonId: `nsfw 0`,buttonText: {displayText: `📌 OFF`,},type: 1,},])}
				break
			case 'simih':
			case 'simsimi':
			case 'simi':
				if (!isGroup) return reply(han.groupo())
				if (!isGroupAdmins) return reply(han.admin())
				if (!isBotGroupAdmins) return reply(han.badmin())
				if (Number(args[0]) === 1) {
					if (isSimi) return reply('UDAH AKTIF KAK')
					simi.push(from)
					fs.writeFileSync("./storage/simi.json", JSON.stringify(simi))
					reply('SIMSIMI DIAKTIFKAN')
					zero.sendMessage(from,`*Halo Kak*`, text)
				} else if (Number(args[0]) === 0) {
					if (!isSimi) return reply('EMANG AKTIF?')
					simi.splice(from, 1)
					fs.writeFileSync("./storage/simi.json", JSON.stringify(simi))
					reply('SIMSIMI DINONAKTIFKAN')
				} else if (!q) {
					sendButMessage(from, `*「MODE SIMSIMI」*\n\nKetik *${prefix + command} 1* apabila tombol tidak muncul/berfungsi.\n`, `Silahkan Pilih Salah Satu`, [{buttonId: `simi 1`,buttonText: {displayText: `🌀 ON`,},type: 1,},{buttonId: `simi 0`,buttonText: {displayText: `🗿 OFF`,},type: 1,},])}
				break
			/*case 'promotedemote':
				if (!isGroup) return reply(han.groupo())
				if (!isGroupAdmins) return reply(han.admin())
				if (!isBotGroupAdmins) return reply(han.badmin())
				if (Number(args[0]) === 1) {
					if (isDemo) return reply('UDAH AKTIF KAK')
					demo.push(from)
					fs.writeFileSync("./storage/demo.json", JSON.stringify(demo))
					reply('PROMOTE & DEMOTE DETECT : *ON*')
				} else if (Number(args[0]) === 0) {
					if (!isDemo) return reply('EMANG AKTIF?')
					demo.splice(from, 1)
					fs.writeFileSync("./storage/demo.json", JSON.stringify(demo))
					reply('PROMOTE & DEMOTE DETECT : *OFF*')
				} else if (!q) {
					sendButMessage(from, `*「PROMOTE AND DEMOTE」*\n\nKetik *${prefix}demote 1* apabila tombol tidak muncul/berfungsi.\n`, `Silahkan Pilih Salah Satu`, [{buttonId: `demote 1`,buttonText: {displayText: `📌 ON`,},type: 1,},{buttonId: `demote 0`,buttonText: {displayText: `📌 OFF`,},type: 1,},])}
				break*/
			case 'antivirtex':
				if (!isGroup) return reply(han.groupo())
				if (!isGroupAdmins) return reply(han.admin())
				if (!isBotGroupAdmins) return reply(han.badmin())
				if (Number(args[0]) === 1) {
					if (isAntivirtex) return reply('UDAH NYALA KAK')
					antivirtex.push(from)
					fs.writeFileSync("./storage/antivirtex.json", JSON.stringify(antivirtex))
					reply('SUKSES MENGAKTIFKAN ANTIVIRTEX GROUP')
				} else if (Number(args[0]) === 0) {
					if (!isAntivirtex) return reply('EMANG AKTIF?')
					antivirtex.splice(from, 1)
					fs.writeFileSync("./storage/antivirtex.json", JSON.stringify(antivirtex))
					reply('SUKSES MEMATIKAN ANTIVIRTEX GROUP')
				} else if (!q) {
					sendButMessage(from, `*「ANTIVIRTEX DETECTOR」*\n\nKetik *${prefix}antivirtex 1* apabila tombol tidak muncul/berfungsi.\n`, `Silahkan Pilih Salah Satu`, [{buttonId: `antivirtex 1`,buttonText: {displayText: `📌 ON`,},type: 1,},{buttonId: `antivirtex 0`,buttonText: {displayText: `📌 OFF`,},type: 1,},])}
				break
			case 'welcome':
				if (!isGroup) return reply(han.groupo())
				if (!isGroupAdmins) return reply(han.admin())
				if (!isBotGroupAdmins) return reply(han.badmin())
				if (args[0] === 'on') {
					if (isWelcome) return reply('UDAH AKTIF KAK')
					welcome.push(from)
					fs.writeFileSync("./storage/welcome.json", JSON.stringify(welcome))
					reply('WELCOME GROUP DIAKTIFKAN')
				} else if (args[0] === 'off') {
					if (!isWelcome) return reply('EMANG AKTIF?')
					welcome.splice(from, 1)
					fs.writeFileSync("./storage/welcome.json", JSON.stringify(welcome))
					reply('WELCOME GROUP DINONAKTIFKAN')
				} else if (!q) {
					sendButMessage(from, `*「RAMAH WELCOME」*\n\nKetik *${prefix}welcome on* apabila tombol tidak muncul/berfungsi.\n`, `Silahkan Pilih Salah Satu`, [{buttonId: `welcome on`,buttonText: {displayText: `📌 ON`,},type: 1,},{buttonId: `welcome off`,buttonText: {displayText: `📌 OFF`,},type: 1,},])}
				break
			case 'group':
			case 'grup':
				if (!isGroup) return reply(han.groupo())
				if (!isGroupAdmins) return reply(han.admin())
				if (!isBotGroupAdmins) return reply(han.badmin())
				but = [{ buttonId: 'groupbuka', buttonText: { displayText: '☕ BUKA' }, type: 1 },{ buttonId: 'grouptutup', buttonText: { displayText: '✉️ TUTUP' }, type: 1 }]
				sendButMessage(from, "Silahkan Pilih Untuk Buka/Tutup Group", faketeks, but, zer)
				break
			case 'linkgrup' :
			case 'linkgroup' :
				if (!isGroup) return reply(han.groupo())
				if (!isGroupAdmins) return reply(han.admin())
				if (!isBotGroupAdmins) return reply(han.badmin())
				linkgc = await zero.groupInviteCode(from)
				yeh = `https://chat.whatsapp.com/${linkgc}\n\n𝐋𝐢𝐧𝐤 𝐆𝐫𝐨𝐮𝐩 *${groupName}*`
				zero.sendMessage(from, yeh, text, { quoted: zer })
				break
			case 'listprem':
			case 'listpremium':
			case 'premlist':
				if (!isPremium) return reply(han.pre())
				teks = '*List Premium:*\n\n'
				for (let manikgans of prem) {
				teks += `- ${manikgans}\n`
				}
				teks += `\n*Total : ${prem.length}*`
				zero.sendMessage(from, teks.trim(), extendedText, { quoted: ftrol, contextInfo: { "mentionedJid": prem } })
				break
			case 'addprem':
				if (!isOwner && !zer.key.fromMe) return reply(han.ownerb())
				adprem = `${args[0].replace('@','')}@s.whatsapp.net`
				prem.push(adprem)
				fs.writeFileSync('./storage/premium.json', JSON.stringify(prem))
			 	reply(`BERHASIL MENAMBAHKAN USER PREMIUM`)
				break
			case 'dellprem':
				if (!isOwner && !zer.key.fromMe) return reply(han.ownerb())
				delp = body.slice(10)
				prem.splice(`${delp}@s.whatsapp.net`, 1)
				fs.writeFileSync('./storage/premium.json', JSON.stringify(prem))
				reply(`Berhasil Menghapus wa.me/${delp} Dari Daftar Premium`)
				break
			case 'hidetag':
				if (!isGroup) return reply(han.groupo())
				if (!isGroupAdmins) return reply(han.admin())
				if (!isBotGroupAdmins) reply(han.badmin())
				ht = body.slice(9)
				if (args.length == 0) return reply(`Usage : *${prefix + command} teks*`)
				if (ht.length <= 11) return reply(`Kependekan oi, kalo hidetag gak penting mending gausah`)
				members_id = []
				for (let mem of groupMembers) {
					members_id.push(mem.jid)
				}
				mentions(ht, members_id, false)
				break
			case 'tagall':
				if (!isGroup) return reply(han.groupo())
				if (!isGroupAdmins) return reply(han.admin())
				if (!isBotGroupAdmins) reply(han.badmin())
				ht = body.slice(8)
				if (args.length == 0) return reply(`Usage : *${prefix + command} deskripsi*`)
				if (ht.length <= 11) return reply(`Kependekan oi, kalo ngetag gak penting mending gausah`)
				let arr = []
				let txti = `[ 𝗧𝗔𝗚 𝗔𝗟𝗟 ]\n${q ? q : ''}\n\n`
				for (let i of groupMembers){
					txti += `=> @${i.jid.split("@")[0]}\n`
					arr.push(i.jid)
				}
				mentions(txti, arr, true)
				break
			case 'setdesc':
				if (!isGroup) return reply(han.groupo())
				if (!isGroupAdmins) return reply(han.admin())
				if (!isBotGroupAdmins) return reply(han.badmin())
				if (args.length == 0) return reply(`ya apa deskripsinya ? ditulis lah ndull.`)
				zero.groupUpdateDescription(from, `${body.slice(9)}`)
				zero.sendMessage(from, `*「 SUKSES 」 MENGUBAH DESC GRUP*`, text, { quoted: zer })
				break
			case 'setname':
				if (!isGroup) return reply(han.groupo())
				if (!isGroupAdmins) return reply(han.admin())
				if (!isBotGroupAdmins) return reply(han.badmin())
				if (args.length == 0) return reply(`Apa namanya ? Gini amat Admin grup.`)
				zero.groupUpdateSubject(from, `${body.slice(9)}`)
				zero.sendMessage(from, `*「 SUKSES 」*\n\nNama Grup : *${body.slice(9)}*`, text, { quoted: zer })
				break
			case 'setpp':
				if (!isGroup) return reply(han.groupo())
				if (!isGroupAdmins) return reply(han.admin())
				if (!isBotGroupAdmins) reply(han.badmin())
				if (!isQuotedImage) return reply('Mana ajg gambarnya ?')
				if (args.length != 0) return reply(han.noneed())
				media = await zero.downloadAndSaveMediaMessage(zer, './storage/media_user')
				await zero.updateProfilePicture(from, media)
				reply(mess.wait)
				reply(`*「 SUKSES 」 MENGUBAH ICON GROUP\n\nGroup : ${groupMetadata.subject}*`)
				break
			case 'kick':
				if (!isGroup) return reply(han.groupo())
				if (!isBotGroupAdmins) return reply(han.badmin())
				if (zer.message.extendedTextMessage === undefined || zer.message.extendedTextMessage === null) return reply('*Tag Target yang ingin di Tendang!*')
				mentioned = zer.message.extendedTextMessage.contextInfo.mentionedJid
				var kiklah = `${sender.split("@")[0]}@s.whatsapp.net`
				if (!isGroupAdmins && (mentioned == tescuk2[0] || mentioned == tescuk2[1] || mentioned == tescuk2[2])) {
					reply(`Mengresahkan... 🤹‍♂️`)
					await sleep(3000)
					zero.groupRemove(from, [kiklah])
				}
				if (!isGroupAdmins) return reply(han.admin())
				if (mentioned == tescuk2[0] || mentioned == tescuk2[1] || mentioned == tescuk2[2]) return reply('*Jan gitu pak :v*')
				if (mentioned.length > 1) {
					teks = ''
					for (let _ of mentioned) {
						teks += `Asek dapat makanan,otw mengkickmu, 🏃 :\n`
						teks += `@_.split('@')[0]`
					}
					mentions(teks, mentioned, true)
					zero.groupRemove(from, mentioned)
				} else {
					mentions(`asek dapat makanan,otw mengkickmu, @${mentioned[0].split('@')[0]} 🏃`, mentioned, true)
					zero.groupRemove(from, mentioned)
				}
				break
			case 'add':
				if (!isGroup) return reply(han.groupo())
				if (!isGroupAdmins) return reply(han.admin())
				if (!isBotGroupAdmins) return reply(han.badmin())
				if (args.length < 1) return reply('yang mau di add jin ya ?')
				if (args[0].startsWith('08') || args[0].startsWith('+')) return reply(`Gunakan Kode Negara Gan\n\nContoh : ${prefix + command} 6282xxxxxxxxx`)
				try {
					num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
					zero.groupAdd(from, [num])
				} catch (e) {
					console.log('Error :', e)
					reply('𝐆𝐚𝐠𝐚𝐥 𝐌𝐞𝐧𝐚𝐦𝐛𝐚𝐡𝐤𝐚𝐧 𝐓𝐚𝐫𝐠𝐞𝐭, 𝐌𝐮𝐧𝐠𝐤𝐢𝐧 𝐊𝐚𝐫𝐞𝐧𝐚 𝐃𝐢 𝐏𝐫𝐢𝐯𝐚𝐭𝐞!')
				}
				break
			case 'demote' :
				if (!isGroup) return reply(han.groupo())
				if (!isGroupAdmins) return reply(han.admin())
				if (!isBotGroupAdmins) return reply(han.badmin())
				if (zer.message.extendedTextMessage === undefined || zer.message.extendedTextMessage === null) return reply('Tag target yang ingin diturunin jabatannya!')
				mentioned = zer.message.extendedTextMessage.contextInfo.mentionedJid
				if (mentioned.length > 1) {
					teks = 'Status adminmu dicopot. Makanya jan jadi sider 🏃 :\n'
					for (let _ of mentioned) {
						teks += `@${_.split('@')[0]}\n`
					}
					mentions(teks, mentioned, true)
					zero.groupDemoteAdmin(from, mentioned)
				} else {
					mentions(`YA YAHYA WAHYU @${mentioned[0].split('@')[0]} Jabatan adminmu di copt, Makanya jan jadi sider🏃`, mentioned, true)
					zero.groupDemoteAdmin(from, mentioned)
				}
				break
			case 'promote' :
				if (!isGroup) return reply(han.groupo())
				if (!isGroupAdmins) return reply(han.admin())
				if (!isBotGroupAdmins) return reply(han.badmin())
				if (zer.message.extendedTextMessage === undefined || zer.message.extendedTextMessage === null) return reply('Tag target yang ingin di jadi admin!')
				mentioned = zer.message.extendedTextMessage.contextInfo.mentionedJid
				if (mentioned.length > 1) {
					teks = 'Selamat 🥳 Anda naik menjadi Admin Grup (+_+) :\n'
					for (let _ of mentioned) {
						teks += `@${_.split('@')[0]}\n`
					}
					mentions(teks, mentioned, true)
					zero.groupMakeAdmin(from, mentioned)
				} else {
				mentions(`Selamat 🥳 *@${mentioned[0].split('@')[0]}* anda naik menjadi Admin Grup ${groupMetadata.subject}`, mentioned, true)
					zero.groupMakeAdmin(from, mentioned)
				}
				break
			case 'event':
				pp = 'on or off?'
				but = [{ buttonId: `epen 1`, buttonText: { displayText: 'ON️' }, type: 1 },{ buttonId: `epen 0`, buttonText: { displayText: 'OFF' }, type: 1 }]
				sendButMessage(from, pp, 'Event Group', but, ftrol)
				break
			case 'epen':
				if (!isGroup) return reply(han.groupo())
				if (!isOwner) return reply(han.ownerb())
				if (args.length < 1) return reply('Boo :𝘃')
				if (Number(args[0]) === 1) {
					if (isEventon) return reply('*SUDAH AKTIF* !!!')
					event.push(from)
					fs.writeFileSync('./storage/event.json', JSON.stringify(event))
					reply('*❬ SUKSES ❭ MENGAKTIFKAN EVENT DI GRUB INI*')
				} else if (Number(args[0]) === 0) {
					event.splice(from, 1)
					fs.writeFileSync('./storage/event.json', JSON.stringify(event))
					reply('*❬ SUKSES ❭ MENONAKTIFKAN EVENT DI GRUB INI*')
				} else {
					reply('eeee')
				}									 
				break
			case 'groupbuka' :
				if (!isGroup) return reply(han.groupo())
				if (!isGroupAdmins) return reply(han.admin())
				if (!isBotGroupAdmins) return reply(han.badmin())
				reply(`\`\`\`𝐒𝐮𝐤𝐬𝐞𝐬 𝐌𝐞𝐦𝐛𝐮𝐤𝐚 𝐆𝐫𝐨𝐮𝐩\`\`\` *${groupMetadata.subject}*`)
				zero.groupSettingChange(from, GroupSettingChange.messageSend, false)
				break
			case 'grouptutup' :
				if (!isGroup) return reply(han.groupo())
				if (!isGroupAdmins) return reply(han.admin())
				if (!isBotGroupAdmins) return reply(han.badmin())
				reply(`\`\`\`𝐒𝐮𝐤𝐬𝐞𝐬 𝐌𝐞𝐧𝐮𝐭𝐮𝐩 𝐆𝐫𝐨𝐮𝐩\`\`\` *${groupMetadata.subject}*`)
				zero.groupSettingChange(from, GroupSettingChange.messageSend, true)
				break
			case 'bc': 
				if (!isGroup) return reply(han.groupo())
				if (!isOwner) return reply(han.ownerb())
				anu = await zero.chats.all()
				if (isMedia && !zer.message.videoMessage || isQuotedImage) {
					const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(zer).replace('quotedM','m')).message.extendedTextMessage.contextInfo : zer
					buff = await zero.downloadMediaMessage(encmedia)
					for (let _ of anu) {
						zero.sendMessage(_.jid, buff, image, {caption: `${body.slice(4)}\n_*Just BC-Bot*_`}) //dah up
					}
					reply('*_succes broadcast_* ')
				} else if (isMedia && zer.message.videoMessage || isQuotedVideo && zer.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage) {
					var konti = body.slice(4)
					const enmediap = isQuotedVideo ? JSON.parse(JSON.stringify(zer).replace('quotedM','m')).message.extendedTextMessage.contextInfo : zer
					//var enmediap = JSON.parse(JSON.stringify(zer).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					var mediap = await zero.downloadAndSaveMediaMessage(enmediap)
					const buffer3 = fs.readFileSync(mediap)
					for (let _ of anu) {
						zero.sendMessage(_.jid, buffer3, MessageType.video, {caption: `${konti}\n_*Just BC-Bot*_`})
					}
					reply(`Sukses upload video: ${konti}`)
				} else {
					for (let _ of anu) {
						//sendMess(_.jid, `*_Changelog v5.2 :_*\n\n${body.slice(4)}`) //dah up
						sendMess(_.jid, `${body.slice(4)}\n_*Just BC-Bot*_`) //dah up
					}
					reply('*_succes broadcast_* ')
				}
				break
			case 'bcbut': 
				if (!isGroup) return reply(han.groupo())
				if (!isOwner) return reply(han.ownerb())
				anu = await zero.chats.all()
				teks = args.join(" ")
				if (isMedia && !zer.message.videoMessage || isQuotedImage) {
					const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(zer).replace('quotedM','m')).message.extendedTextMessage.contextInfo : zer
					buff = await zero.downloadMediaMessage(encmedia)
					for (let _ of anu) {
						zero.sendMessage(_.jid, {"contentText": `*「 Azami Loader 」*\n\n${teks}`,
						"footerText": `_*BunnyWalker-Bot Broadcast*_`,"buttons": [{"buttonId": `${prefix}allmenu`,"buttonText": {"displayText": "LIST ALL MENU"},"type": "RESPONSE"}], "headerType": 'LOCATION',locationMessage: { degreesLatitude: '',degreesLongitude: '',jpegThumbnail: buff,}}, MessageType.buttonsMessage )
					}
					reply('*_succes broadcast_* ')
				} else {
					reply('Mana pic ?')
				}
				break

			// SEARCHING MENU //
			case 'gimage':
			case 'pixiv':
				if (!isGroup && !isPremium) return reply(han.groupp())
				if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(han.limitend(pushname))
				if (args.length == 0) return reply(`Example: ${prefix + command} loli kawaii`)
				query = args.join(" ")
				zero.sendMessage(from,`*「 WAIT 」 DON'T SPAM*`, text)
				try {
					buffer = await getBuffer(`https://api.lolhuman.xyz/api/${command}?apikey=${lol}&query=${query}`)
					bba = await zero.prepareMessage(from, buffer, MessageType.image)
					buttons = [{buttonId:`${prefix + command} ${query}`,buttonText: {displayText: 'NEXT ▶'}, type: 1}]
					ButonsMerssages = {
						contentText: `_© Google <> Pixiv_`,
						buttons: buttons,
						footerText: `Klik Next Untuk Melanjutkan`,
						headerType: 4,
						imageMessage: bba.message.imageMessage
					}
					await zero.sendMessage(from, ButonsMerssages, MessageType.buttonsMessage, {quoted: zer})
					limitAdd(sender, limit)
				} catch (e) {
					console.log(e)
					reply(han.errp())
				}
				break
			case 'konachan':
				if (!isGroup && !isPremium) return reply(han.groupp())
				if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(han.limitend(pushname))
				if (body.slice(10).includes(' ')) return reply(`_(query pake underscore sob)_\n\nContoh: *${prefix + command} azur_lane*`)
				if (args.length == 0) return reply(`Contoh: *${prefix + command} azur_lane*\n_(pake underscore, jangan spasi)_`)
				query = args.join(" ")
				zero.sendMessage(from,`*「 WAIT 」 DON'T SPAM*`, text)
				try {
					buffer = await getBuffer(`https://api.lolhuman.xyz/api/${command}?apikey=${lol}&query=${query}`)
					bba = await zero.prepareMessage(from, buffer, MessageType.image)
					buttons = [{buttonId:`${prefix + command} ${query}`,buttonText: {displayText: 'NEXT ▶'}, type: 1}]
					ButonsMerssages = {
						contentText: `_© Konachan Image_`,
						buttons: buttons,
						footerText: `Klik Next Untuk Melanjutkan`,
						headerType: 4,
						imageMessage: bba.message.imageMessage
					}
					await zero.sendMessage(from, ButonsMerssages, MessageType.buttonsMessage, {quoted: zer})
					limitAdd(sender, limit)
				} catch (e) {
					console.log(e)
					reply(han.errp())
				}
				break
			case 'wallpaper':
			case 'pinterest':
				if (args.length == 0) return reply(`Example: ${prefix + command} loli kawaii`)
				query = args.join(" ")
				zero.sendMessage(from,`*「 WAIT 」 DON'T SPAM*`, text)
				try {
					anu = await fetchJson(`https://api.lolhuman.xyz/api/${command}?apikey=${lol}&query=${query}`)
					buffer = await getBuffer (anu.result)
					bba = await zero.prepareMessage(from, buffer, MessageType.image)
					buttons = [{buttonId:`${prefix + command} ${query}`,buttonText: {displayText: 'NEXT ▶'}, type: 1}]
					ButonsMerssages = {
						contentText: `_© by Wallpaper Finder and Pinterest_`,
						buttons: buttons,
						footerText: `Klik Next Untuk Melanjutkan`,
						headerType: 4,
						imageMessage: bba.message.imageMessage
					}
					await zero.sendMessage(from, ButonsMerssages, MessageType.buttonsMessage, {quoted: zer})
				} catch (e) {
					console.log(e)
					reply(han.errp())
				}
				break
			case 'stickerwa':
			case 'stikerwa':
				if (!isGroup && !isPremium) return reply(han.groupp())
				if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(han.limitend(pushname))
				if (args.length == 0) return reply(`Example: ${prefix + command} Koceng Imot`)
				ztick = fs.readFileSync(`./media/sticker/notfound.webp`)
				query = args.join(" ")
				get_result = await fetchJson(`https://api.lolhuman.xyz/api/stickerwa?apikey=${lol}&query=${query}`)
				if (get_result.status == '200') {
					try {
						get_result = get_result.result[Math.floor(Math.random() * get_result.result.length)].stickers
					    //━━━━━[ random array but not repeat ]━━━━━━
					    ranNums = []
					    i = get_result.length
					    j = 0
						while (i--) {
						    j = Math.floor(Math.random() * (i+1))
						    ranNums.push(get_result[j])
						    get_result.splice(j,1)
						}
						//━━━━━[ random array but not repeat ]━━━━━━
						get_nums = ranNums.slice(0, 6)
						for (var x of get_nums) {
							ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/convert/towebp?apikey=${lol}&img=${x}`)
							await zero.sendMessage(from, ini_buffer, sticker)
						}
						limitAdd(sender, limit)
					} catch (e) {
						console.log(e)
						zero.sendMessage(from, ztick, sticker, { quoted: zer })
					}
				} else {
					reply(han.err())
				}
				break
			case 'stikerpatrick':
			case 'stickerpatrick':
			case 'stikerpatrik':
			case 'stickerpatrik':
			case 'patrick':
			case 'patrik':
			case 'spatrick':
			case 'spatrik':
				if (!isGroup && !isPremium) return reply(han.groupp())
				if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(han.limitend(pushname))
				if (args.length != 0) return reply(han.noneed())
				ztick = fs.readFileSync(`./media/sticker/bronya.webp`)
				try {
					ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/convert/towebp?apikey=${lol}&img=https://api.lolhuman.xyz/api/sticker/patrick?apikey=${lol}`)
					await zero.sendMessage(from, ini_buffer, sticker, { quoted: zer })
					limitAdd(sender, limit)
				} catch (e) {
					console.log(e)
					zero.sendMessage(from, ztick, sticker, { quoted: zer })
				}
				break
			case 'stikergawgura':
			case 'stickergawgura':
			case 'gawgura':
			case 'sgawgura':
			case 'stikergawrgura':
			case 'stickergawrgura':
			case 'gawrgura':
			case 'sgawrgura':
				if (!isGroup && !isPremium) return reply(han.groupp())
				if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(han.limitend(pushname))
				if (args.length != 0) return reply(han.noneed())
				ztick = fs.readFileSync(`./media/sticker/bronya.webp`)
				try {
					ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/convert/towebp?apikey=${lol}&img=https://api.lolhuman.xyz/api/sticker/gawrgura?apikey=${lol}`)
					await zero.sendMessage(from, ini_buffer, sticker, { quoted: zer })
					limitAdd(sender, limit)
				} catch (e) {
					console.log(e)
					zero.sendMessage(from, ztick, sticker, { quoted: zer })
				}
				break
			case 'stikeranjing':
			case 'stickeranjing':
			case 'sanjing':
			case 'anjing':
				if (!isGroup && !isPremium) return reply(han.groupp())
				if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(han.limitend(pushname))
				if (args.length != 0) return reply(han.noneed())
				ztick = fs.readFileSync(`./media/sticker/bronya.webp`)
				try {
					ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/convert/towebp?apikey=${lol}&img=https://api.lolhuman.xyz/api/sticker/anjing?apikey=${lol}`)
					await zero.sendMessage(from, ini_buffer, sticker, { quoted: zer })
					limitAdd(sender, limit)
				} catch (e) {
					console.log(e)
					zero.sendMessage(from, ztick, sticker, { quoted: zer })
				}
				break
			case 'stikerbucin':
			case 'stickerbucin':
			case 'sbucin':
				if (!isGroup && !isPremium) return reply(han.groupp())
				if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(han.limitend(pushname))
				if (args.length != 0) return reply(han.noneed())
				ztick = fs.readFileSync(`./media/sticker/bronya.webp`)
				try {
					ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/convert/towebp?apikey=${lol}&img=https://api.lolhuman.xyz/api/sticker/bucinstick?apikey=${lol}`)
					await zero.sendMessage(from, ini_buffer, sticker, { quoted: zer })
					limitAdd(sender, limit)
				} catch (e) {
					console.log(e)
					zero.sendMessage(from, ztick, sticker, { quoted: zer })
				}
				break
			case 'ppcouple':
				if (!isGroup && !isPremium) return reply(han.groupp())
				if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(han.limitend(pushname))
				if (args.length != 0) return reply(han.noneed())
				get_result = await fetchJson(`https://api.lolhuman.xyz/api/random/ppcouple?apikey=${lol}`)
					if (get_result.status == '200') {
						try {
							ini_male = await getBuffer(get_result.result.male)
							ini_female = await getBuffer(get_result.result.female)
							await zero.sendMessage(from, ini_male, image)
							await zero.sendMessage(from, ini_female, image)
							limitAdd(sender, limit)
						} catch (e) {
							reply('Gagal memuat gambar.')
							console.log(e)
						}
					} else {
						reply(han.err())
					}
				break

			// RANDOM TEXT //
			case 'quotes':
			case 'quote':
				if (!isGroup && !isPremium) return reply(han.groupp())
				if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(han.limitend(pushname))
				if (args.length != 0) return reply(han.noneed())
				try {
					quotes = await fetchJson(`https://api.lolhuman.xyz/api/random/quotes?apikey=${lol}`)
					if (quotes.status == '200') {
						quotes = quotes.result
						author = quotes.by
						quotes = quotes.quote
						reply(`_${quotes}_\n\n*― ${author}*`)
						limitAdd(sender, limit)
					} else {
						reply(han.errs())
					}
				} catch (e) {
					console.log(e)
					reply(han.err())
				}
				break
			case 'quotesanime':
			case 'quotesnime':
			case 'quotenime':
			case 'quoteanime':
				if (!isGroup && !isPremium) return reply(han.groupp())
				if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(han.limitend(pushname))
				if (args.length != 0) return reply(han.noneed())
				try {
					quotes = await fetchJson(`https://api.lolhuman.xyz/api/random/quotesnime?apikey=${lol}`)
					if (quotes.status == '200') {
						quotes = quotes.result
						quote = quotes.quote
						char = quotes.character
						anime = quotes.anime
						episode = quotes.episode
						reply(`_${quote}_\n\n*― ${char}*\n*― ${anime} ${episode}*`)
						limitAdd(sender, limit)
					} else {
						reply(han.errs())
					}
				} catch (e) {
					console.log(e)
					reply(han.err())
				}
				break
			case 'quotesdilan':
			case 'quotedilan':
				if (!isGroup && !isPremium) return reply(han.groupp())
				if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(han.limitend(pushname))
				if (args.length != 0) return reply(han.noneed())
				try {
					quotedilan = await fetchJson(`https://api.lolhuman.xyz/api/quotes/dilan?apikey=${lol}`)
					if (quotedilan.status == '200') {
						reply(quotedilan.result)
						limitAdd(sender, limit)
					} else {
						reply(han.errs())
					}
				} catch (e) {
					console.log(e)
					reply(han.err())
				}
				break
			case 'quotesimage':
			case 'quoteimage':
				if (!isGroup && !isPremium) return reply(han.groupp())
				if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(han.limitend(pushname))
				if (args.length != 0) return reply(han.noneed())
				try {
					buffer = await getBuffer(`https://api.lolhuman.xyz/api/random/quotesimage?apikey=${lol}`)
					bba = await zero.prepareMessage(from, buffer, MessageType.image)
					buttons = [{buttonId:`${prefix + command}`,buttonText: {displayText: 'NEXT ▶'}, type: 1}]
					ButonsMerssages = {
						contentText: `_© Quote untuk Anda._`,
						buttons: buttons,
						footerText: `Klik Next Untuk Melanjutkan`,
						headerType: 4,
						imageMessage: bba.message.imageMessage
					}
					await zero.sendMessage(from, ButonsMerssages, MessageType.buttonsMessage, {quoted: zer})
					limitAdd(sender, limit)
				} catch (e) {
					console.log(e)
					reply(han.err())
				}
				break
			case 'faktaunik':
			case 'katabijak':
			case 'pantun':
			case 'bucin':
			case 'puisi':
				if (!isGroup && !isPremium) return reply(han.groupp())
				if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(han.limitend(pushname))
				if (args.length != 0) return reply(han.noneed())
				try {
					get_result = await fetchJson(`https://api.lolhuman.xyz/api/random/${command}?apikey=${lol}`)
					if (get_result.status == '200') {
						reply(get_result.result)
						limitAdd(sender, limit)
					} else {
						reply(han.errs())
					}
				} catch (e) {
					console.log(e)
					reply(han.err())
				}
				break
			case 'randomnama':
				if (args.length != 0) return reply(han.noneed())
				try {
					anu = await fetchJson(`https://api.lolhuman.xyz/api/random/nama?apikey=${lol}`)
					if (anu.status == '200') {
						reply(anu.result)
					} else {
						reply(han.errs())
					}
				} catch (e) {
					console.log(e)
					reply(han.err())
				}
				break
			case 'randomorang':
			case 'ranorg':
			case 'ranorang':
			case 'randompeople':
			case 'ranppl':
			case 'ranpeople':
				if (args.length != 0) return reply(han.noneed())
				try {
					anu = await fetchJson(`https://api.lolhuman.xyz/api/random/people?apikey=${lol}`)
					if (anu.status == '200') {
						get_result = anu.result
						ini_txt = `*Name : ${get_result.name.title} ${get_result.name.first} ${get_result.name.last}*\n`
						ini_txt += `Gender : ${get_result.gender}\n\n`
						ini_txt += `*「 ADDRESS 」*\n`
						ini_txt += `Street Name : ${get_result.location.street.name}\n`
						ini_txt += `Street Number : ${get_result.location.street.number}\n`
						ini_txt += `City : ${get_result.location.city}\n`
						ini_txt += `State : ${get_result.location.state}\n`
						ini_txt += `Country : ${get_result.location.country}\n`
						ini_txt += `Postcode : ${get_result.location.postcode}\n\n`
						ini_txt += `*TIMEZONE*\n`
						ini_txt += `Offset : ${get_result.location.timezone.offset}\n`
						ini_txt += `Desc : ${get_result.location.timezone.description}`
						await zero.sendMessage(from, { degreesLatitude: get_result.location.coordinates.latitude, degreesLongitude: get_result.location.coordinates.longitude }, location, { quoted: zer, caption: `tes` })
						reply(ini_txt)
					} else {
						reply(han.errs())
					}
				} catch (e) {
					console.log(e)
					reply(han.err())
				}
				break

			// INFORMATION //
			case 'heroml':
				if (!isGroup && !isPremium) return reply(han.groupp())
				if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(han.limitend(pushname))
				if (args.length == 0) return reply(`Example: ${prefix + command} Fanny`)
				hero = args.join(" ")
				try {
					get_result = await fetchJson(`https://api.lolhuman.xyz/api/heroml/${hero}?apikey=${lol}`)
					if (get_result.status == '200') {
						get_result = get_result.result
						ini_txt = `*Name : ${get_result.hero_name}*\n`
						ini_txt += `Entrance Quotes : ${get_result.ent_quotes}\n\n`
						ini_txt += `*Role : ${get_result.detail.role}*\n\n`
						ini_txt += `Specialty : ${get_result.detail.specialty}\n`
						ini_txt += `Laning : ${get_result.detail.laning_recommendation}\n`
						ini_txt += `Release : ${get_result.detail.release_date}\n\n`
						ini_txt += `*Details :*\n`
						ini_txt += `Movement Speed : ${get_result.attr.movement_speed}\n`
						ini_txt += `Physical Attack : ${get_result.attr.physical_attack}\n`
						ini_txt += `Magic Power : ${get_result.attr.magic_power}\n`
						ini_txt += `Attack Speed : ${get_result.attr.attack_speed}\n`
						ini_txt += `Physical Defense : ${get_result.attr.physical_defense}\n`
						ini_txt += `Magic Defense : ${get_result.attr.magic_defense}\n`
						ini_txt += `Critical Rate : ${get_result.attr.basic_atk_crit_rate}\n`
						ini_txt += `Hp : ${get_result.attr.hp}\n`
						ini_txt += `Mana : ${get_result.attr.mana}\n`
						ini_txt += `Ability Crit. Rate : ${get_result.attr.ability_crit_rate}\n`
						ini_txt += `HP Regen : ${get_result.attr.hp_regen}\n`
						ini_txt += `Mana Regen : ${get_result.attr.mana_regen}\n`
						ini_icon = await getBuffer(get_result.icon)
						await zero.sendMessage(from, ini_icon, image, { quoted: zer, caption: ini_txt })
						limitAdd(sender, limit)
					} else if (get_result.status == '404') {
						reply(get_result.message)
					} else {
						reply(`Unfortunately, character's details cannot be shown.`)
					}
				} catch (e) {
					console.log(e)
					reply(han.err())
				}
				break
			case 'mlstalk':
				if (!isGroup && !isPremium) return reply(han.groupp())
				if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(han.limitend(pushname))
				if (args.length == 0 || !q.includes('|')) return reply(`Usage : ${prefix + command} ID|Server\n\nExample: *${prefix + command} 84830127|2169*`)
				ini_nama = args.join(" ").split("|")
				txt1 = ini_nama[0].trim()
				txt2 = ini_nama[1].trim()
				if (isNaN(txt1) || txt1.length == 0) return reply('Invalid ID')
				if (isNaN(txt2) || txt2.length == 0) return reply('Invalid Server')
				try {
					get_result = await fetchJson(`https://api.lolhuman.xyz/api/mobilelegend/${txt1}/${txt2}?apikey=${lol}`)
					if (get_result.status == '200') {
						reply(`Nickname :\n*${get_result.result}*`)
						limitAdd(sender, limit)
					} else {
						reply(`Player not found.`)
					}
				} catch (e) {
					console.log(e)
					reply(han.err())
				}
				break
			case 'superhero':
				if (!isGroup && !isPremium) return reply(han.groupp())
				if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(han.limitend(pushname))
				if (args.length == 0) return reply(`Example: ${prefix + command} batman`)
				try {
					get_result = await fetchJson(`https://api.lolhuman.xyz/api/superhero?apikey=${lol}&query=${body.slice(11)}`)
					if (get_result.status == '200') {
						get_result = get_result.result
						txt = `*Full Name : ${get_result.biography["full-name"]}* - ${get_result.biography["alter-egos"]}\n\n`
						txt += `*Series :* ${get_result.biography.aliases[0]}, ${get_result.biography.aliases[1]}, ,${get_result.biography.aliases[2]}, ${get_result.biography.aliases[3]}, ${get_result.biography.aliases[4]}\n\n`
						txt += `Place of Birth : ${get_result.biography["place-of-birth"]}\n`
						txt += `First Appearance : ${get_result.biography["first-appearance"]}\n`
						txt += `publisher : ${get_result.biography.publisher}\n`
						txt += `Rating : ${get_result.biography.alignment}\n`
						txt += `Gender : ${get_result.appearance.gender}\n`
						txt += `Race : ${get_result.appearance.race}\n\n`
						txt += `Height : ${get_result.appearance.height}\n`
						txt += `Eye Color : ${get_result.appearance["eye-color"]}\n`
						txt += `Hair Color : ${get_result.appearance["hair-color"]}\n`
						txt += `*Work :*\n- ${get_result.work.occupation}\n- ${get_result.work.base}\n\n*Connections :*\n*Affiliation :* ${get_result.connections["group-affiliation"]}\n*Relatives :* ${get_result.connections.relatives}`
						buffer = await getBuffer(get_result.image.url)
						zero.sendMessage(from, buffer, image, {quoted: zer, caption: txt})
						limitAdd(sender, limit)
					} else {
						reply(`Superhero not found.`)
					}
				} catch (e) {
					console.log(e)
					reply(han.err())
				}
				break
			case 'osuplayer':
				if (!isGroup && !isPremium) return reply(han.groupp())
				if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(han.limitend(pushname))
				if (args.length == 0) return reply(`Usage : ${prefix + command} username\n\nExample: *${prefix + command} xxhonorxx*`)
				try {
					get_result = await fetchJson(`https://api.lolhuman.xyz/api/osuname/${body.slice(11)}?apikey=${lol}`)
					if (get_result.status == '200') {
						get_result = get_result.result
						txt = `User ID : ${get_result.user_id} - ${get_result.country}\n`
						txt += `Username : *${get_result.username}*\n`
						txt += `Join Date : ${get_result.join_date}\n\n`
						txt += `count300 : ${get_result.count300}\n`
						txt += `count100 : ${get_result.count100}\n`
						txt += `count50 : ${get_result.count50}\n\n`
						txt += `playcount : ${get_result.playcount}\n`
						txt += `Ranked Score : ${get_result.ranked_score}\n\n`
						txt += `Total Score : ${get_result.total_score}\n`
						txt += `PP Rank : ${get_result.pp_rank}\n`
						txt += `Level : *${get_result.level}*\n`
						txt += `PP Raw : *${get_result.pp_raw}*\n`
						txt += `Accuracy : *${get_result.accuracy} %*\n\n`
						txt += `count_rank_ss : *${get_result.count_rank_ss}*\n`
						txt += `count_rank_ssh : *${get_result.count_rank_ssh}*\n`
						txt += `count_rank_s : *${get_result.count_rank_s}*\n`
						txt += `count_rank_sh : *${get_result.count_rank_sh}*\n`
						txt += `count_rank_a : *${get_result.count_rank_a}*\n`
						txt += `total_sec_played : *${get_result.total_seconds_played}*\n`
						txt += `pp_country_rank : *${get_result.pp_country_rank}*\n`
						reply(txt)
						limitAdd(sender, limit)
					} else {
						reply('Username not found.')
					}
				} catch (e) {
					console.log(e)
					reply(han.err())
				}
				break
			case 'readqr':
				if (!isGroup && !isPremium) return reply(han.groupp())
				if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(han.limitend(pushname))
				if (args.length != 0) return reply(han.noneed())
				var imgbb = require('imgbb-uploader')
				if ((isMedia && !zer.message.videoMessage || isQuotedImage) && args.length == 0) {
					ted = isQuotedImage ? JSON.parse(JSON.stringify(zer).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: zer
					owgi = await zero.downloadAndSaveMediaMessage(ted)
					anu = await imgbb("7b2fde1f55b9a594d5db403f0a0c2712", owgi)
					try {
						get_result = await fetchJson(`https://api.lolhuman.xyz/api/read-qr?apikey=${lol}&img=${anu.display_url}`, {method: 'get'})
						reply("*Result :* " + get_result.result)
						limitAdd(sender, limit)
					} catch (e) {
						console.log(e)
						reply(han.err())
					}
				} else {
					reply(`Kirim gambar dengan caption *${prefix + command}* atau tag gambar yang sudah dikirim`)
				}
				break
			case 'createqr':
				if (!isGroup && !isPremium) return reply(han.groupp())
				if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(han.limitend(pushname))
				if (args.length == 0) return reply(`Example: ${prefix + command} zerenity bot`)
				query = args.join(" ")
				thumbnail = fs.readFileSync(`./media/gagal.jpg`)
				try {
					ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/qrcode?apikey=${lol}&text=${query}`)
					try {
						await zero.sendMessage(from, ini_buffer, image, { quoted: zer })
						limitAdd(sender, limit)
					} catch {
						await zero.sendMessage(from, thumbnail, image, { quoted: zer })
					}
				} catch (e) {
					console.log(e)
					reply(han.err())
				}
				break
			case 'readbarcode':
				if (!isGroup && !isPremium) return reply(han.groupp())
				if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(han.limitend(pushname))
				if (args.length != 0) return reply(han.noneed())
				var imgbb = require('imgbb-uploader')
				if ((isMedia && !zer.message.videoMessage || isQuotedImage) && args.length == 0) {
					ted = isQuotedImage ? JSON.parse(JSON.stringify(zer).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: zer
					owgi = await zero.downloadAndSaveMediaMessage(ted)
					anu = await imgbb("7b2fde1f55b9a594d5db403f0a0c2712", owgi)
					try {
						hehe = await fetchJson(`https://docs-jojo.herokuapp.com/api/barcode_read?image_url=${anu.display_url}`, {method: 'get'})
						ini_txt = `*TEXT :*\n${hehe.result.raw_text}\n\n`
						ini_txt += `*raw bytes :*\n${hehe.result.raw_bytes}`
						reply(ini_txt)
						limitAdd(sender, limit)
					} catch (e) {
						reply(han.err())
						console.log(e)
					}
				} else {
					reply(`Kirim gambar dengan caption *${prefix + command}* atau tag gambar yang sudah dikirim`)
				}
				break
			case 'createbarcode':
				if (!isGroup && !isPremium) return reply(han.groupp())
				if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(han.limitend(pushname))
				if (args.length == 0) return reply(`Example: ${prefix + command} zerenity bot`)
				query = args.join(" ")
				thumbnail = fs.readFileSync(`./media/gagal.jpg`)
				try {
					ini_buffer = await getBuffer(`https://docs-jojo.herokuapp.com/api/barcode_maker?text=${query}`)
					try {
						await zero.sendMessage(from, ini_buffer, image, { quoted: zer })
						limitAdd(sender, limit)
					} catch {
						await zero.sendMessage(from, thumbnail, image, { quoted: zer })
					}
				} catch (e) {
					console.log(e)
					reply(han.err())
				}
				break
			case 'wikipedia':
				if (!isGroup && !isPremium) return reply(han.groupp())
				if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(han.limitend(pushname))
				if (args.length == 0) return reply(`Example: ${prefix + command} Tahu`)
				query = args.join(" ")
				try {
					get_result = await fetchJson(`https://api.lolhuman.xyz/api/wiki?apikey=${lol}&query=${query}`)
					if (get_result.status == '200') {
						get_result = get_result.result
						reply(get_result)
						limitAdd(sender, limit)
					} else {
						reply('Tidak ditemukan / fitur error.')
					}
				} catch (e) {
					console.log(e)
					reply(han.err())
				}
				break
			case 'translate':
				if (args.length == 0 || !q.includes('|')) return reply(`Penggunaan: ${prefix + command} kode_negara|teks\n\nContoh: *${prefix + command} en|Tahu Bacem*`)
				ini_nama = args.join(" ").split("|")
				kode_negara = ini_nama[0].trim()
				ini_txt = ini_nama[1].trim()
				if (kode_negara.length == 0) return reply('masukkan kode negara')
				if (ini_txt.length == 0) return reply('teks yang pengen ditranslate mana cuy')
				try {
					get_result = await fetchJson(`https://api.lolhuman.xyz/api/translate/auto/${kode_negara}?apikey=${lol}&text=${ini_txt}`)
					if (get_result.status == '200') {
						get_result = get_result.result
						init_txt = `From *${get_result.from}* >> to *${get_result.to}*\n\n`
						init_txt += `*Original :* ${get_result.original}\n`
						init_txt += `*Translated :* ${get_result.translated}\n\n`
						init_txt += `Pronunciation : ${get_result.pronunciation}\n`
						reply(init_txt)
					} else {
						reply(`Kode bahasa salah / fitur error.\nUntuk melihat list kode bahasa, gunakan *${prefix}kodebahasa*`)
					}
				} catch (e) {
					console.log(e)
					reply(han.err())
				}
				break
			case 'kodebahasa':
			case 'listbahasa':
				zero.sendMessage(from, han.bahasa(), text, {quoted: ftrol})
				break
			case 'brainly':
				if (!isGroup && !isPremium) return reply(han.groupp())
				if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(han.limitend(pushname))
				if (args.length == 0) return reply(`Example: ${prefix + command} Soekarno adalah`)
				query = args.join(" ")
				try {
					get_result = await fetchJson(`https://api.lolhuman.xyz/api/brainly?apikey=${lol}&query=${query}`)
					if (get_result.status == '200') {
						get_result = get_result.result
						ini_txt = "*Result :*"
						for (var x of get_result) {
							ini_txt += `\n\n${x.title}\n`
							ini_txt += `${x.url}\n`
							ini_txt += `───────────────────`
						}
						reply(ini_txt)
						limitAdd(sender, limit)
					} else {
						reply('Tidak ditemukan / fitur error.')
					}
				} catch (e) {
					console.log(e)
					reply(han.err())
				}
				break
			case 'jadwaltv':
				if (!isGroup && !isPremium) return reply(han.groupp())
				if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(han.limitend(pushname))
				if (args.length == 0) return reply(`Example: ${prefix + command} RCTI`)
				channel = args[0]
				try {
					get_result = await fetchJson(`https://api.lolhuman.xyz/api/jadwaltv/${channel}?apikey=${lol}`)
					if (get_result.status == '200') {
						get_result = get_result.result
						ini_txt = `*Jadwal TV ${channel.toUpperCase()}*\n\n`
						for (var x in get_result) {
							ini_txt += `${x} - ${get_result[x]}\n`
						}
						reply(ini_txt)
						limitAdd(sender, limit)
					} else {
						reply('Jadwal tidak tersedia / fitur error.')
					}
				} catch (e) {
					console.log(e)
					reply(han.err())
				}
				break
			case 'jadwaltvnow':
				if (!isGroup && !isPremium) return reply(han.groupp())
				if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(han.limitend(pushname))
				if (args.length != 0) return reply(han.noneed())
				try {
					get_result = await fetchJson(`https://api.lolhuman.xyz/api/jadwaltv/now?apikey=${lol}`)
					if (get_result.status == '200') {
						get_result = get_result.result
						ini_txt = `*Jadwal TV Now :*`
						for (var x in get_result) {
							ini_txt += `\n\n${x.toUpperCase()}${get_result[x]}\n───────────────────`
						}
						reply(ini_txt)
						limitAdd(sender, limit)
					} else {
						reply('Jadwal tidak tersedia / fitur error.')
					}
				} catch (e) {
					console.log(e)
					reply(han.err())
				}
				break
			case 'infogempa':
			case 'gempa':
				if (!isGroup && !isPremium) return reply(han.groupp())
				if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(han.limitend(pushname))
				if (args.length != 0) return reply(han.noneed())
				try {
					get_result = await fetchJson(`https://api.lolhuman.xyz/api/infogempa?apikey=${lol}`)
					if (get_result.status == '200') {
						get_result = get_result.result
						ini_txt = `*${get_result.lokasi}*\n\n`
						ini_txt += `Waktu : ${get_result.waktu}\n`
						ini_txt += `Potensi : *${get_result.potensi}*\n\n`
						ini_txt += `Magnitude : ${get_result.magnitude}\n`
						ini_txt += `Kedalaman : ${get_result.kedalaman}\n`
						ini_txt += `Koordinat : ${get_result.koordinat}`
						get_buffer = await getBuffer(get_result.map)
						await zero.sendMessage(from, get_buffer, image, { quoted: zer, caption: ini_txt })
						limitAdd(sender, limit)
					} else {
						reply('Info tidak tersedia / fitur error.')
					}
				} catch (e) {
					console.log(e)
					reply(han.err())
				}
				break
			case 'lirik':
				if (!isGroup && !isPremium) return reply(han.groupp())
				if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(han.limitend(pushname))
				if (args.length == 0) return reply(`Example: ${prefix + command} Melukis Senja`)
				query = args.join(" ")
				try {
					get_result = await fetchJson(`https://api.lolhuman.xyz/api/lirik?apikey=${lol}&query=${query}`)
					if (get_result.status == '200') {
						reply(get_result.result)
						limitAdd(sender, limit)
					} else {
						reply('Lirik tidak ditemukan.')
					}
				} catch (e) {
					console.log(e)
					reply(han.err())
				}
				break
			case 'chord':
				if (!isGroup && !isPremium) return reply(han.groupp())
				if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(han.limitend(pushname))
				if (args.length == 0) return reply(`Example: ${prefix + command} Melukis senja`)
				query = args.join(" ")
				try {
					get_result = await fetchJson(`https://api.lolhuman.xyz/api/chord?apikey=${lol}&query=${query}`)
					if (get_result.status == '200') {
						get_result = get_result.result
						ini_txt = `\n*${get_result.title.replace("&#8211;", "-")}*\n\n`
						ini_txt += `*Chord :*\n${get_result.chord}`
						reply(ini_txt)
						limitAdd(sender, limit)
					} else {
						reply('Chord tidak ditemukan.')
					}
				} catch (e) {
					console.log(e)
					reply(han.err())
				}
				break
			case 'cuaca':
				if (!isGroup && !isPremium) return reply(han.groupp())
				if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(han.limitend(pushname))
				if (args.length == 0) return reply(`Example: ${prefix + command} Samarinda`)
				daerah = args[0]
				try {
					get_result = await fetchJson(`https://api.lolhuman.xyz/api/cuaca/${daerah}?apikey=${lol}`)
					if (get_result.status == '200' && get_result.result.tempat != "") {
						get_result = get_result.result
						ini_txt = `*Tempat : ${get_result.tempat}*\n\n`
						ini_txt += `Cuaca : ${get_result.cuaca}\n`
						ini_txt += `Angin : ${get_result.angin}\n`
						ini_txt += `Description : ${get_result.description}\n`
						ini_txt += `Kelembapan : ${get_result.kelembapan}\n`
						ini_txt += `Suhu : ${get_result.suhu}\n`
						ini_txt += `Udara : ${get_result.udara}\n`
						ini_txt += `Permukaan laut : ${get_result.permukaan_laut}\n`
						await zero.sendMessage(from, { degreesLatitude: get_result.latitude, degreesLongitude: get_result.longitude }, location, { quoted: zer })
						reply(ini_txt)
						limitAdd(sender, limit)
					} else {
						reply(`Cuaca ${daerah} tidak tersedia / fitur error.`)
					}
				} catch (e) {
					console.log(e)
					reply(han.err())
				}
				break
			case 'kodepos':
				if (!isGroup && !isPremium) return reply(han.groupp())
				if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(han.limitend(pushname))
				if (args.length == 0) return reply(`Example: ${prefix + command} Samarinda or ${prefix + command} 66154`)
				daerah = args.join(" ")
				try {
					get_result = await fetchJson(`https://api.lolhuman.xyz/api/kodepos?apikey=${lol}&query=${daerah}`)
					if (get_result.status == '200') {
						get_result = get_result.result
						ini_txt = "*Result :*"
						for (var x of get_result) {
							ini_txt += `\n\nProvinsi : ${x.province}\n`
							ini_txt += `Kabupaten : ${x.city}\n`
							ini_txt += `Kecamatan : ${x.subdistrict}\n`
							ini_txt += `Kelurahan : ${x.urban}\n\n`
							ini_txt += `*Kode Pos : ${x.postalcode}*\n`
							ini_txt += `───────────────────`
						}
						reply(ini_txt)
						limitAdd(sender, limit)
					} else {
						reply('Kodepos tidak ditemukan / fitur error.')
					}
				} catch (e) {
					console.log(e)
					reply(han.err())
				}
				break
			case 'jadwalbola':
				if (!isGroup && !isPremium) return reply(han.groupp())
				if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(han.limitend(pushname))
				if (args.length != 0) return reply(han.noneed())
				try {
					get_result = await fetchJson(`https://api.lolhuman.xyz/api/jadwalbola?apikey=${lol}`)
					if (get_result.status == '200') {
						get_result = get_result.result
						ini_txt = "*Jadwal Bola :*"
						for (var x of get_result) {
							ini_txt += `\n\nHari : ${x.hari}\n`
							ini_txt += `Jam : ${x.jam}\n`
							ini_txt += `Event : ${x.event}\n`
							ini_txt += `Match : *${x.match}*\n`
							ini_txt += `TV : ${x.tv}\n`
							ini_txt += `───────────────────`
						}
						reply(ini_txt)
						limitAdd(sender, limit)
					} else {
						reply('Jadwal tidak tersedia / fitur error.')
					}
				} catch (e) {
					console.log(e)
					reply(han.err())
				}
				break
			case 'indbeasiswa':
				if (!isGroup && !isPremium) return reply(han.groupp())
				if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(han.limitend(pushname))
				if (args.length != 0) return reply(han.noneed())
				try {
					get_result = await fetchJson(`https://api.lolhuman.xyz/api/indbeasiswa?apikey=${lol}`)
					if (get_result.status == '200') {
						get_result = get_result.result
						ini_txt = '*Info Beasiswa :*'
						for (var x of get_result) {
							ini_txt += `\n\nTitle : ${x.title}\n`
							ini_txt += `Link : ${x.link}\n`
							ini_txt += `───────────────────`
						}
						reply(ini_txt)
						limitAdd(sender, limit)
					} else {
						reply('Info beasiswa tidak tersedia / fitur error.')
					}
				} catch (e) {
					console.log(e)
					reply(han.err())
				}
				break
			case 'hoax':
				if (!isGroup && !isPremium) return reply(han.groupp())
				if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(han.limitend(pushname))
				if (args.length != 0) return reply(han.noneed())
				try {
					get_result = await fetchJson(`https://api.lolhuman.xyz/api/turnbackhoax?apikey=${lol}`)
					if (get_result.status == '200') {
						get_result = get_result.result
						ini_txt = '*Info Hoax :*'
						for (var x of get_result) {
							ini_txt += `\n\nTitle : *${x.title}*\n`
							ini_txt += `Link : ${x.link}\n`
							ini_txt += `Posted : ${x.posted}\n`
							ini_txt += `Description : ${x.desc}\n`
							ini_txt += `───────────────────`
						}
						reply(ini_txt)
						limitAdd(sender, limit)
					} else {
						reply('Informasi tidak tersedia / fitur error.')
					}
				} catch (e) {
					console.log(e)
					reply(han.err())
				}
				break
			case 'nsfwcheck':
			case 'nsfwcek':
			case 'ceknsfw':
				if (!isGroup && !isPremium) return reply(han.groupp())
				if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(han.limitend(pushname))
				if (args.length != 0) return reply(han.noneed())
				var imgbb = require('imgbb-uploader')
				if ((isMedia && !zer.message.videoMessage || isQuotedImage) && args.length == 0) {
					ted = isQuotedImage ? JSON.parse(JSON.stringify(zer).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: zer
					owgi = await zero.downloadAndSaveMediaMessage(ted)
					anu = await imgbb("7b2fde1f55b9a594d5db403f0a0c2712", owgi)
					try {
						get_result = await fetchJson(`https://api.lolhuman.xyz/api/nsfwcheck?apikey=${lol}&img=${anu.display_url}`, {method: 'get'})
						if (get_result.status == '200') {
							get_result = get_result.result
							is_nsfw = "No"
							if (Number(get_result.replace("%", "")) >= 50) is_nsfw = "Yes"
							reply(`Is NSFW? *${is_nsfw}*\n\nNSFW Score : *${get_result}*`)
							limitAdd(sender, limit)
						} else {
							reply('Gagal mendeteksi / fitur error.')
						}
					} catch (e) {
						console.log(e)
						reply(han.err())
					}
				} else {
					reply(`Kirim gambar dengan caption *${prefix + command}* atau tag gambar yang sudah dikirim`)
				}
				break
			case 'cekusia':
			case 'usiacek':
				if (!isGroup && !isPremium) return reply(han.groupp())
				if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(han.limitend(pushname))
				if (args.length != 0) return reply(han.noneed())
				var imgbb = require('imgbb-uploader')
				if ((isMedia && !zer.message.videoMessage || isQuotedImage) && args.length == 0) {
					ted = isQuotedImage ? JSON.parse(JSON.stringify(zer).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: zer
					owgi = await zero.downloadAndSaveMediaMessage(ted)
					anu = await imgbb("7b2fde1f55b9a594d5db403f0a0c2712", owgi)
					get_result = await fetchJson(`https://api.lolhuman.xyz/api/agedetect?apikey=${lol}&img=${anu.display_url}`, {method: 'get'})
					try {
						if (get_result.status == '200') {
							get_result = get_result.result
							reply(`*Usia :*\n\n${get_result} Tahun.`)
							limitAdd(sender, limit)
						} else {
							reply('Usahakan wajah terlihat jelas, dan hindari penggunaan gambar animasi.')
						}
					} catch {
						reply(han.err())
					}
				} else {
					reply(`Kirim gambar dengan caption *${prefix + command}* atau tag gambar yang sudah dikirim`)
				}
				break
			case 'ocr':
				if (!isGroup && !isPremium) return reply(han.groupp())
				if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(han.limitend(pushname))
				if (args.length != 0) return reply(han.noneed())
				var imgbb = require('imgbb-uploader')
				if ((isMedia && !zer.message.videoMessage || isQuotedImage) && args.length == 0) {
					ted = isQuotedImage ? JSON.parse(JSON.stringify(zer).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: zer
					owgi = await zero.downloadAndSaveMediaMessage(ted)
					anu = await imgbb("7b2fde1f55b9a594d5db403f0a0c2712", owgi)
					try {
						get_result = await fetchJson(`https://api.lolhuman.xyz/api/ocr?apikey=${lol}&img=${anu.display_url}`, {method: 'get'})
						if (get_result.status == '200') {
							get_result = get_result.result
							reply(`*Result :*\n${get_result}`)
							limitAdd(sender, limit)
						} else {
							reply('Gagal mendeteksi / fitur error.')
						}
					} catch (e) {
						console.log(e)
						reply(han.err())
					}
				} else {
					reply(`Kirim gambar dengan caption *${prefix + command}* atau tag gambar yang sudah dikirim`)
				}
				break
			// ENTERTAINTMENT //
			case 'asupan':
				if (!isGroup && !isPremium) return reply(han.groupp())
				if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(han.limitend(pushname))
				if (args.length != 0) return reply(han.noneed())
				zero.sendMessage(from,`*「 WAIT 」 DON'T SPAM*`, text)
				try {
					anu = await fetchJson(`https://api.lolhuman.xyz/api/asupan?apikey=${lol}`)
					buffer = await getBuffer (anu.result)
					sendButVideo(from,`dahlah males`,'_Ketuk Next untuk melanjutkan_', buffer, [{buttonId:`${prefix + command}`,buttonText: {displayText: 'NEXT ▶'}, type: 1}], {quoted:zer})
					limitAdd(sender, limit)
				} catch (e) {
					console.log(e)
					reply(han.err())
				}
				break
			case '1cak':
			case 'wancak':
				if (!isGroup && !isPremium) return reply(han.groupp())
				if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(han.limitend(pushname))
				if (args.length != 0) return reply(han.noneed())
				try {
					buffer = await getBuffer(`https://api.lolhuman.xyz/api/onecak?apikey=${lol}`)
					bba = await zero.prepareMessage(from, buffer, MessageType.image)
					buttons = [{buttonId:`${prefix + command}`,buttonText: {displayText: 'NEXT ▶'}, type: 1}]
					ButonsMerssages = {
						contentText: `_© 1cak_`,
						buttons: buttons,
						footerText: `Klik Next Untuk Melanjutkan`,
						headerType: 4,
						imageMessage: bba.message.imageMessage
					}
					await zero.sendMessage(from, ButonsMerssages, MessageType.buttonsMessage, {quoted: zer})
					limitAdd(sender, limit)
				} catch (e) {
					console.log(e)
					reply(han.err())
				}
				break
			case 'meme2':
			case 'memeindo':
				if (!isGroup && !isPremium) return reply(han.groupp())
				if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(han.limitend(pushname))
				if (args.length != 0) return reply(han.noneed())
				zero.sendMessage(from,`*「 WAIT 」 DON'T SPAM*`, text)
				try {
					buffer = await getBuffer(`https://api.lolhuman.xyz/api/meme/memeindo?apikey=${lol}`)
					bba = await zero.prepareMessage(from, buffer, MessageType.image)
					buttons = [{buttonId:`${prefix + command}`,buttonText: {displayText: 'NEXT ▶'}, type: 1}]
					ButonsMerssages = {
						contentText: `_© meme cringe_`,
						buttons: buttons,
						footerText: `Klik Next Untuk Melanjutkan`,
						headerType: 4,
						imageMessage: bba.message.imageMessage
					}
					await zero.sendMessage(from, ButonsMerssages, MessageType.buttonsMessage, {quoted: zer})
					limitAdd(sender, limit)
				} catch (e) {
					console.log(e)
					reply(han.err())
				}
				break
			case 'meme':
				if (!isGroup && !isPremium) return reply(han.groupp())
				if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(han.limitend(pushname))
				if (args.length != 0) return reply(han.noneed())
				zero.sendMessage(from,`*「 WAIT 」 DON'T SPAM*`, text)
				try {
					buffer = await getBuffer(`https://api.lolhuman.xyz/api/random/meme?apikey=${lol}`)
					bba = await zero.prepareMessage(from, buffer, MessageType.image)
					buttons = [{buttonId:`${prefix + command}`,buttonText: {displayText: 'NEXT ▶'}, type: 1}]
					ButonsMerssages = {
						contentText: `_© meme english_`,
						buttons: buttons,
						footerText: `Klik Next Untuk Melanjutkan`,
						headerType: 4,
						imageMessage: bba.message.imageMessage
					}
					await zero.sendMessage(from, ButonsMerssages, MessageType.buttonsMessage, {quoted: zer})
					limitAdd(sender, limit)
				} catch (e) {
					console.log(e)
					reply(han.err())
				}
				break
			case 'changemymind':
				if (!isGroup && !isPremium) return reply(han.groupp())
				if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(han.limitend(pushname))
				if (args.length == 0) return reply(`Example: ${prefix + command} loli legal`)
				try {
					zero.sendMessage(from,`*「 WAIT 」 DON'T SPAM*`, text)
					ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/creator/changemymind?apikey=${lol}&text=${q}`)
					await zero.sendMessage(from, ini_buffer, image, { quoted: zer })
					limitAdd(sender, limit)
				} catch (e) {
					console.log(e)
					reply(han.err())
				}
				break
			case 'darkjoke':
			case 'darkjokes':
				if (!isGroup && !isPremium) return reply(han.groupp())
				if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(han.limitend(pushname))
				if (args.length != 0) return reply(han.noneed())
				zero.sendMessage(from,`*「 WAIT 」 DON'T SPAM*`, text)
				try {
					buffer = await getBuffer(`https://api.lolhuman.xyz/api/meme/darkjoke?apikey=${lol}`)
					bba = await zero.prepareMessage(from, buffer, MessageType.image)
					buttons = [{buttonId:`${prefix + command}`,buttonText: {displayText: 'NEXT ▶'}, type: 1}]
					ButonsMerssages = {
						contentText: `_© darkjoke_`,
						buttons: buttons,
						footerText: `Klik Next Untuk Melanjutkan`,
						headerType: 4,
						imageMessage: bba.message.imageMessage
					}
					await zero.sendMessage(from, ButonsMerssages, MessageType.buttonsMessage, {quoted: zer})
					limitAdd(sender, limit)
				} catch (e) {
					console.log(e)
					reply(han.err())
				}
				break

			// CREATOR //
			case 'takestick':
			case 'take':
			case 'takestik':
			case 'colong':
				if (!isGroup && !isPremium) return reply(han.groupp())
				if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(han.limitend(pushname))
				if ((isMedia && !zer.message.videoMessage || isQuotedSticker)) {
					ztick = fs.readFileSync(`./media/sticker/bronya.webp`)
					if (args.length == 0) return reply(`Example: ${prefix + command} ${NameBot}|Bot`)
					const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(zer).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : zer
					var image_buffer = await zero.downloadMediaMessage(encmedia);
					var ini_txt = args.join(" ").split("|")
					if (ini_txt[0].length == 0) return reply('nama package tidak boleh kosong')
					if (ini_txt[1].length == 0) return reply('nama author tidak boleh kosong')
					var formdata = new FormData()
					zero.sendMessage(from,`*「 WAIT 」 DON'T SPAM*`, text)
					try {
						formdata.append('package', ini_txt[0])
						formdata.append('author', ini_txt[1])
						formdata.append('img', image_buffer, { filename: 'tahu.jpg' })
						axios.post(`https://api.lolhuman.xyz/api/convert/towebpauthor?apikey=${lol}`, formdata.getBuffer(), { headers: { "content-type": `multipart/form-data; boundary=${formdata._boundary}` }, responseType: 'arraybuffer' }).then((res) => {
							zero.sendMessage(from, res.data, sticker, { quoted: zer })
						})
					} catch (e) {
						console.log(e)
						zero.sendMessage(from, ztick, sticker, { quoted: zer })
					}
				} else {
					reply(`Tag sticker yang sudah dikirim!`)
				}
				break
			case 'ttp':
			case 'ttp2':
			case 'ttp3':
			case 'ttp4':
			case 'ttp5':
			case 'ttp6':
			case 'attp':
			case 'attp2':
				if (args.length == 0) return reply(`Example: ${prefix + command} Ram Rem`)
				ini_txt = args.join(" ")
				ztick = fs.readFileSync(`./media/sticker/bronya.webp`)
				try {
					zero.sendMessage(from,`*「 WAIT 」 DON'T SPAM*`, text)
					ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/${command}?apikey=${lol}&text=${ini_txt}`)
					await zero.sendMessage(from, ini_buffer, sticker, { quoted: zer })
				} catch (e) {
					console.log(e)
					zero.sendMessage(from, ztick, sticker, { quoted: zer })
				}
				break
			case 'quotemaker':
			case 'quotemaker2':
				if (!isGroup && !isPremium) return reply(han.groupp())
				if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(han.limitend(pushname))
				if (args.length == 0) return reply(`Example: ${prefix + command} Males Boong Mulu`)
				ini_txt = args.join(" ")
				try {
					zero.sendMessage(from,`*「 WAIT 」 DON'T SPAM*`, text)
					ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/${command}?apikey=${lol}&text=${ini_txt}`)
					await zero.sendMessage(from, ini_buffer, image, { quoted: zer })
					limitAdd(sender, limit)
				} catch (e) {
					console.log(e)
					reply(han.err())
				}
				break
			case 'phcomment':
				if (!isGroup && !isPremium) return reply(han.groupp())
				if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(han.limitend(pushname))
				if (args.length == 0 || !q.includes('|')) return reply(`Usage : ${prefix + command} username|comment\n\nExample: *${prefix + command} kribo|hmm.., menarik*`)
				ini_nama = args.join(" ").split("|")
				txt1 = ini_nama[0].trim()
				txt2 = ini_nama[1].trim()
				if (txt1.length == 0) return reply('Username tidak boleh kosong')
				if (txt2.length == 0) return reply('Masukkan teks komentar')
				try {
					zero.sendMessage(from,`*「 WAIT 」 DON'T SPAM*`, text)
					ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/phcomment?apikey=${lol}&img=https://i.ibb.co/DkWHn5Y/86543b228071.png&text=${txt2}&username=${txt1}`)
					await zero.sendMessage(from, ini_buffer, image, { quoted: zer })
					limitAdd(sender, limit)
				} catch (e) {
					console.log(e)
					reply(han.err())
				}
				break
			case 'ssweb':
				if (!isGroup && !isPremium) return reply(han.groupp())
				if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(han.limitend(pushname))
				if (args.length == 0) return reply(`Usage : ${prefix + command} _url_web_\n\nExample: ${prefix + command} https://www.google.com`)
				if (!q.includes('http')) return reply('please input a valid url.\nTry with add http:// or https://')
				ini_txt = args.join(" ")
				thumbnail = fs.readFileSync(`./genshin/gagal.jpg`)
				zero.sendMessage(from,`*「 WAIT 」 DON'T SPAM*`, text)
				try {
					ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/ssweb?apikey=${lol}&url=${ini_txt}`)
					await zero.sendMessage(from, ini_buffer, image, { quoted: zer, caption: `${q}` })
					limitAdd(sender, limit)
				} catch (e) {
					console.log(e)
					await zero.sendMessage(from, thumbnail, image, { quoted: zer, caption: `Atau coba gunakan *${prefix}ssweb2*` })
				}
				break
			case 'ssweb2':
			case 'sswebfull':
				if (!isGroup && !isPremium) return reply(han.groupp())
				if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(han.limitend(pushname))
				if (args.length == 0) return reply(`Usage : ${prefix + command} _url_web_\n\nExample: ${prefix + command} https://www.google.com`)
				if (!q.includes('http')) return reply('please input a valid url.\nTry with add http:// or https://')
				ini_txt = args.join(" ")
				thumbnail = fs.readFileSync(`./genshin/gagal.jpg`)
				zero.sendMessage(from,`*「 WAIT 」 DON'T SPAM*`, text)
				try {
					ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/sswebfull?apikey=${lol}&url=${ini_txt}`)
					await zero.sendMessage(from, ini_buffer, image, { quoted: zer, caption: `${q}` })
					limitAdd(sender, limit)
				} catch (e) {
					console.log(e)
					await zero.sendMessage(from, thumbnail, image, { quoted: zer, caption: `Atau coba gunakan *${prefix}ssweb*` })
				}
				break
			case 'sticker':
			case 'stiker':
			case 's':
				if (args.length != 0) return reply(han.noneed())
				ztick = fs.readFileSync(`./media/sticker/bronya.webp`)
				if ((isMedia && !zer.message.videoMessage || isQuotedImage) && args.length == 0) {
					const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(zer).replace('quotedM','m')).message.extendedTextMessage.contextInfo : zer
					const media = await zero.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.webp')
					await ffmpeg(`./${media}`)
					.input(media)
					.on('start', function (cmd) {
						console.log(`Started : ${cmd}`)
					})
					.on('error', function (err) {
						console.log(`Error : ${err}`)
						fs.unlinkSync(media)
						reply(han.stikga())
					})
					.on('end', function () {
						console.log('Finish')
						exec(`webpmux -set exif ${addMetadata(namo, ator)} ${ran} -o ${ran}`, async (error) => {
							try {
								zero.sendMessage(from, fs.readFileSync(ran), sticker, { quoted: zer })
							} catch (e) {
								console.log(e)
								zero.sendMessage(from, ztick, sticker, { quoted: zer })
							}
							fs.unlinkSync(media)
							fs.unlinkSync(ran)
						})
					})
					.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
					.toFormat('webp')
					.save(ran)
				} else if ((isMedia && zer.message.videoMessage.seconds < 11 || isQuotedVideo && zer.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
					const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(zer).replace('quotedM','m')).message.extendedTextMessage.contextInfo : zer
					const media = await zero.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.webp')
					zero.sendMessage(from,`*「 WAIT 」 DON'T SPAM*`, text)
					await ffmpeg(`./${media}`)
					.inputFormat(media.split('.')[1])
					.on('start', function (cmd) {
						console.log(`Started : ${cmd}`)
					})
					.on('error', function (err) {
						console.log(`Error : ${err}`)
						fs.unlinkSync(media)
						tipe = media.endsWith('.mp4') ? 'video' : 'gif'
						reply(han.stikga())
					})
					.on('end', function () {
						console.log('Finish')
						exec(`webpmux -set exif ${addMetadata(namo, ator)} ${ran} -o ${ran}`, async (error) => {
							try {
								zero.sendMessage(from, fs.readFileSync(ran), sticker, { quoted: zer })
							} catch (e) {
								console.log(e)
								zero.sendMessage(from, ztick, sticker, { quoted: zer })
							}
							fs.unlinkSync(media)
							fs.unlinkSync(ran)
						})
					})
					.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
					.toFormat('webp')
					.save(ran)
				} else {
					reply(`Kirim gambar/video/gif dengan caption \n${prefix}sticker (durasi sticker video 1-9 detik)`)
				}
				break
			case 'toimg':
				if (args.length != 0) return reply(han.noneed())
				if (!isQuotedSticker) return reply('Reply/tag sticker !')
				zero.sendMessage(from,`*「 WAIT 」 DON'T SPAM*`, text)
				encmedia = JSON.parse(JSON.stringify(zer).replace('quotedM','m')).message.extendedTextMessage.contextInfo
				media = await zero.downloadAndSaveMediaMessage(encmedia)
				ran = getRandom('.png')
				thumbnail = fs.readFileSync(`./genshin/gagal.jpg`)
				exec(`ffmpeg -i ${media} ${ran}`, (err) => {
					fs.unlinkSync(media)
					if (err) return reply(`yah gagal\ngunakan *${prefix}tomp4* untuk stiker bergerak`)
					buffer = fs.readFileSync(ran)
					try {
						zero.sendMessage(from, buffer, image, {quoted: zer, caption: 'tuh dh jadi '})
					} catch {
						zero.sendMessage(from, thumbnail, image, { quoted: zer })
					}
					fs.unlinkSync(ran)
				})
				break
			case 'stickermeme':
			case 'memesticker':
			case 'memestick':
			case 'stickmeme':
			case 'stcmeme':
			case 'smeme':
				if (isMedia && !zer.message.videoMessage || isQuotedImage) {
					if (args.length == 0 || !q.includes('|')) return reply(`Usage : ${prefix + command} teks1|teks2\n\nExample: *${prefix + command} atas|bawah*`)
					var ini_txt = args.join(" ").split("|")
					if (ini_txt[0].length == 0 && ini_txt[1].length == 0) return reply('isi teks atas atau teks bawah nya')
					if (ini_txt[0].length == 0) {
						ini_txt[0] = '-'
					}
					if (ini_txt[1].length == 0) {
						ini_txt[1] = '-'
					}
					zero.sendMessage(from,`*「 WAIT 」 DON'T SPAM*`, text)
					try {
						const enmedia = isQuotedImage ? JSON.parse(JSON.stringify(zer).replace('quotedM','m')).message.extendedTextMessage.contextInfo : zer
						var mediia = await zero.downloadMediaMessage(enmedia)
						var njay = await uploadImages(mediia)
						var resu = `https://api.memegen.link/images/custom/${ini_txt[0]}/${ini_txt[1]}.png?background=${njay}`
						sendStickerFromUrl(from,`${resu}`)
					} catch {
						console.log(e)
						reply(han.err())
					}
				} else {
					reply('Reply / tag gambar nya !')
				}
				break
			case 'tomp3':
			case 'toaudio':
				if (args.length != 0) return reply(han.noneed())
				if (isMedia && zer.message.videoMessage || isQuotedVideo && zer.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage) {
					zero.sendMessage(from,`*「 WAIT 」 DON'T SPAM*`, text)
					encmedia = JSON.parse(JSON.stringify(zer).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await zero.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp4')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply(`Err: ${err}`)
						buffer453 = fs.readFileSync(ran)
						zero.sendMessage(from, buffer453, audio, { mimetype: 'audio/mp4', quoted: zer })
						fs.unlinkSync(ran)
					})
				} else {
					reply('Reply/tag video !')
				}
				break
			case 'tomp4':
			case 'tovideo':
			case 'tovid':
				if (!isGroup && !isPremium) return reply(han.groupp())
				if (args.length != 0) return reply(han.noneed())
				if (!isQuotedSticker) return reply('Reply/tag sticker bergerak !')
				if (antrivideo.hasOwnProperty(nano.split('@')[0])) return reply("Wet... Selow bang,")
				zero.sendMessage(from,`*「 WAIT 」 DON'T SPAM*`, text)
				if ((isQuotedSticker)) {
					nih = "SabarLah"
					antrivideo[nano.split('@')[0]] = nih.toLowerCase()
					fs.writeFileSync("./storage/antrivideo.json", JSON.stringify(antrivideo))
					const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(zer).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : zer
					var image_buffer = await zero.downloadMediaMessage(encmedia)
					var formdata = new FormData()
					formdata.append('img', image_buffer, { filename: 'tahu.webp' })
					axios.post(`https://api.lolhuman.xyz/api/convert/webptomp4?apikey=${lol}`, formdata.getBuffer(), { headers: { "content-type": `multipart/form-data; boundary=${formdata._boundary}` } }).then((res) => {
						zero.sendMessage(from, { url: res.data.result }, video, { mimetype: Mimetype.mp4, quoted: zer })
					})
					limitAdd(sender, limit)
					delete antrivideo[nano.split('@')[0]]
					fs.writeFileSync("./storage/antrivideo.json", JSON.stringify(antrivideo))
				} else {
					reply(han.err())
				}
				break
			case 'fakedonald':
				if (!isGroup && !isPremium) return reply(han.groupp())
				if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(han.limitend(pushname))
				if (args.length == 0) return reply(`Example: ${prefix + command} Ram Rem`)
				ini_txt = args.join(" ")
				try {
					zero.sendMessage(from,`*「 WAIT 」 DON'T SPAM*`, text)
					ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/tweettrump?apikey=${lol}&text=${ini_txt}`)
					await zero.sendMessage(from, ini_buffer, image, { quoted: zer })
					limitAdd(sender, limit)
				} catch (e) {
					console.log(e)
					reply(han.err())
				}
				break

			// PRIMBON
			case 'artinama':
				if (!isGroup && !isPremium) return reply(han.groupp())
				if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(han.limitend(pushname))
				if (args.length == 0) return reply(`Example: ${prefix + command} Tiara Ayu`)
				ini_nama = args.join(" ")
				get_result = await fetchJson(`https://api.lolhuman.xyz/api/artinama?apikey=${lol}&nama=${ini_nama}`)
				if (get_result.status == '200') {
					reply(get_result.result)
					limitAdd(sender, limit)
				} else {
					reply(han.err())
				}
				break
			case 'jodoh':
				if (!isGroup && !isPremium) return reply(han.groupp())
				if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(han.limitend(pushname))
				if (args.length == 0 || !q.includes('|')) return reply(`Usage : ${prefix + command} name1|name2\n\nExample: *${prefix + command} Tahu|Bacem*`)
				ini_nama = args.join(" ").split("|")
				nama1 = ini_nama[0].trim()
				nama2 = ini_nama[1].trim()
				if (nama1.length == 0) return reply('input name1')
				if (nama2.length == 0) return reply('input name2')
				get_result = await fetchJson(`https://api.lolhuman.xyz/api/jodoh/${nama1}/${nama2}?apikey=${lol}`)
				if (get_result.status == '200') {
					get_result = get_result.result
					ini_txt = `*Positif :* ${get_result.positif}\n`
					ini_txt += `*Negatif :* ${get_result.negatif}\n\n`
					ini_txt += `*Deskripsi :*\n${get_result.deskripsi}`
					reply(ini_txt)
					limitAdd(sender, limit)
				} else {
					reply(han.err())
				}
				break
			case 'weton':
				if (!isGroup && !isPremium) return reply(han.groupp())
				if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(han.limitend(pushname))
				if (args.length == 0 || !q.includes('|')) return reply(`Usage : ${prefix + command} tgl|bln|tahun\n\nExample: *${prefix + command} 26|12|2020*`)
				ini_nama = args.join(" ").split("|")
				txt1 = ini_nama[0].trim()
				txt2 = ini_nama[1].trim()
				txt3 = ini_nama[2].trim()
				if (isNaN(txt1) || txt1.length == 0) return reply('Isi tanggal sesuai format')
				if (isNaN(txt2) || txt2.length == 0) return reply('Isi bulan sesuai format')
				if (isNaN(txt3) || txt3.length == 0) return reply('Isi tahun sesuai format')
				get_result = await fetchJson(`https://api.lolhuman.xyz/api/weton/${txt1}/${txt2}/${txt3}?apikey=${lol}`)
				if (get_result.status == '200') {
					get_result = get_result.result
					ini_txt = `*${get_result.weton}*\n\n`
					ini_txt += `*Pekerjaan :* ${get_result.pekerjaan}\n\n`
					ini_txt += `*Rejeki :* ${get_result.rejeki}\n\n`
					ini_txt += `*Jodoh :* ${get_result.jodoh}`
					reply(ini_txt)
					limitAdd(sender, limit)
				} else {
					reply(han.err())
				}
				break
			case 'jadian':
				if (!isGroup && !isPremium) return reply(han.groupp())
				if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(han.limitend(pushname))
				if (args.length == 0 || !q.includes('|')) return reply(`Usage : ${prefix + command} tgl|bln|tahun\n\nExample: *${prefix + command} 26|12|2020*`)
				ini_nama = args.join(" ").split("|")
				txt1 = ini_nama[0].trim()
				txt2 = ini_nama[1].trim()
				txt3 = ini_nama[2].trim()
				if (isNaN(txt1) || txt1.length == 0) return reply('Isi tanggal sesuai format')
				if (isNaN(txt2) || txt2.length == 0) return reply('Isi bulan sesuai format')
				if (isNaN(txt3) || txt3.length == 0) return reply('Isi tahun sesuai format')
				get_result = await fetchJson(`https://api.lolhuman.xyz/api/jadian/${txt1}/${txt2}/${txt3}?apikey=${lol}`)
				if (get_result.status == '200') {
					get_result = get_result.result
					ini_txt = `*Karakteristik :* ${get_result.karakteristik}\n\n`
					ini_txt += `*Deskripsi :* ${get_result.deskripsi}`
					reply(ini_txt)
					limitAdd(sender, limit)
				} else {
					reply(han.err())
				}
				break
			case 'tebakumur':
				if (!isGroup && !isPremium) return reply(han.groupp())
				if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(han.limitend(pushname))
				if (args.length == 0) return reply(`Example: ${prefix + command} Radit`)
				ini_name = args.join(" ")
				if (args.length == 0) return reply(`Example: ${prefix + command} Ram Rem`)
				get_result = await fetchJson(`https://api.lolhuman.xyz/api/tebakumur?apikey=${lol}&name=${ini_name}`)
				if (get_result.status == '200') {
					get_result = get_result.result
					ini_txt = `Nama : ${get_result.name}\n`
					ini_txt += `Umur : ${get_result.age}`
					reply(ini_txt)
					limitAdd(sender, limit)
				} else {
					reply(han.err())
				}
				break

			// FUN MENU //
			case 'bisakah':
				if (!isGroup && !isPremium) return reply(han.groupp())
				if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(han.limitend(pushname))
				bisakah = body.slice(1)
				const bisa =['Bisa','Tidak Bisa','Coba Ulangi','Ngimpi kah?','yakin bisa?']
				const keh = bisa[Math.floor(Math.random() * bisa.length)]
				zero.sendMessage(from, 'Pertanyaan : *'+bisakah+'*\n\nJawaban : '+ keh, text, { quoted: zer })
				break
			case 'kapankah':
			case 'kapan':
				if (!isGroup && !isPremium) return reply(han.groupp())
				if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(han.limitend(pushname))
				kapankah = body.slice(1)
				const kapan =["Besok","Lusa","Tadi","4 Hari Lagi","5 Hari Lagi","6 Hari Lagi","1 Minggu Lagi","2 Minggu Lagi","3 Minggu Lagi","1 Bulan Lagi","2 Bulan Lagi","3 Bulan Lagi","4 Bulan Lagi","5 Bulan Lagi","6 Bulan Lagi","1 Tahun Lagi","2 Tahun Lagi","3 Tahun Lagi","4 Tahun Lagi","5 Tahun Lagi","6 Tahun Lagi","1 Abad lagi","3 Hari Lagi","Tidak Akan Pernah"]
				const koh = kapan[Math.floor(Math.random() * kapan.length)]
				zero.sendMessage(from, 'Pertanyaan : *'+kapankah+'*\n\nJawaban : '+ koh, text, { quoted: zer })
				break
			case 'apakah':
			case 'apa':
				if (!isGroup && !isPremium) return reply(han.groupp())
				if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(han.limitend(pushname))
				apakah = body.slice(1)
				const apa =["Iya","Tidak","Bisa Jadi","Gatau","Ga mungkin","Coba Ulangi"]
				const kah = apa[Math.floor(Math.random() * apa.length)]
				zero.sendMessage(from, 'Pertanyaan : *'+apakah+'*\n\nJawaban : '+ kah, text, { quoted: zer })
				break
			case 'readmore':
			case 'more':
				if (args.length == 0 || !q.includes('|')) return reply(`Example: ${prefix + command} Hai beb|an keluarga`)
				ini_nama = args.join(" ").split("|")
				txt1 = ini_nama[0].trim()
				txt2 = ini_nama[1].trim()
				if (txt1.length == 0) return reply('Teks pertama tidak boleh kosong')
				if (txt2.length == 0) return reply('input teks yang ingin di hidden')
				const more = String.fromCharCode(8206)
				const readmore = more.repeat(4001)
				reply( txt1 + readmore + txt2)
				break
			/*case 'akinator':
				if (!isGroup && !isPremium) return reply(han.groupp())
				if (akinator.hasOwnProperty(sender.split('@')[0])) return reply("Selesein yg sebelumnya dulu atuh")
				get_result = await fetchJson(`https://api.lolhuman.xyz/api/akinator/start?apikey=${lol}`)
				var { server, frontaddr, session, signature, question, step } = get_result.result
				const data = {}
				data["server"] = server
				data["frontaddr"] = frontaddr
				data["session"] = session
				data["signature"] = signature
				data["question"] = question
				data["step"] = step
				ini_txt = `${question}\n\n`
				ini_txt += "0 - Ya\n"
				ini_txt += "1 - Tidak\n"
				ini_txt += "2 - Saya Tidak Tau\n"
				ini_txt += "3 - Mungkin\n"
				ini_txt += "4 - Mungkin Tidak"
				await zero.sendMessage(from, ini_txt, text, { quoted: zer }).then(() => {
					akinator[sender.split('@')[0]] = data
					fs.writeFileSync("./storage/akinator.json", JSON.stringify(akinator))
				})
				break
			case 'cancelakinator':
			case 'akinatorcancel':
				if (!isGroup && !isPremium) return reply(han.groupp())
				if (!akinator.hasOwnProperty(sender.split('@')[0])) return reply("Anda tidak memiliki akinator sebelumnya")
				delete akinator[sender.split('@')[0]]
				fs.writeFileSync("./storage/akinator.json", JSON.stringify(akinator))
				reply("Success mengcancel akinator sebelumnya")
				break*/
			case 'tebakgambar':
				if (!isGroup && !isPremium) return reply(han.groupp())
				if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(han.limitend(pushname)) // case by piyo-chan
				if (tebakgambar.hasOwnProperty(nano.split('@')[0])) return reply("Antri dulu, tunggu yang lain lagi main :v")
				if (args.length != 0) return reply(han.noneed())
				get_result = await fetchJson(`https://api.lolhuman.xyz/api/tebak/gambar2?apikey=${lol}`)
				if (get_result.status == '200') {
					get_result = get_result.result
					ini_image = get_result.image
					jawaban = get_result.answer
					ini_buffer = await getBuffer(ini_image)
					await zero.sendMessage(from, ini_buffer, image, { quoted: zer, caption: "Jawab gk? Jawab lahhh, masa enggak. 40 detik cukup kan? gk cukup pulang aja" }).then(() => {
						tebakgambar[nano.split('@')[0]] = jawaban.toLowerCase()
						fs.writeFileSync("./storage/tebakgambar.json", JSON.stringify(tebakgambar))
					})
					await sleep(40000)
					if (tebakgambar.hasOwnProperty(nano.split('@')[0])) {
						reply("Jawaban: *" + jawaban + "*")
						limitAdd(sender, limit)
						delete tebakgambar[nano.split('@')[0]]
						fs.writeFileSync("./storage/tebakgambar.json", JSON.stringify(tebakgambar))
					}
				} else {
					reply(han.err())
					delete tebakgambar[nano.split('@')[0]]
					fs.writeFileSync("./storage/tebakgambar.json", JSON.stringify(tebakgambar))
				}
				break
			case 'tebakbendera':
				if (!isGroup && !isPremium) return reply(han.groupp())
				if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(han.limitend(pushname)) // case by piyo-chan
				if (tebakgambar.hasOwnProperty(nano.split('@')[0])) return reply("Antri dulu, tunggu yang lain lagi main :v")
				if (args.length != 0) return reply(han.noneed())
				get_result = await fetchJson(`https://api.lolhuman.xyz/api/tebak/bendera?apikey=${lol}`)
				if (get_result.status == '200') {
					get_result = get_result.result
					tebakbender = `*Bendera apa ini?* ${get_result.flag}\n\nSisa waktu : _30 Detik lagi_ …`
					jawaban = get_result.name
					await zero.sendMessage(from, tebakbender, text, { quoted: zer }).then(() => {
						tebakgambar[nano.split('@')[0]] = jawaban.toLowerCase()
						fs.writeFileSync("./storage/tebakgambar.json", JSON.stringify(tebakgambar))
					})
					await sleep(30000)
					if (tebakgambar.hasOwnProperty(nano.split('@')[0])) {
						reply("Jawaban: *" + jawaban + "*")
						limitAdd(sender, limit)
						delete tebakgambar[nano.split('@')[0]]
						fs.writeFileSync("./storage/tebakgambar.json", JSON.stringify(tebakgambar))
					}
				} else {
					reply(han.err())
					delete tebakgambar[nano.split('@')[0]]
					fs.writeFileSync("./storage/tebakgambar.json", JSON.stringify(tebakgambar))
				}
				break
			case 'tebakjenaka':
				if (!isGroup && !isPremium) return reply(han.groupp())
				if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(han.limitend(pushname))
				if (tebakgambar.hasOwnProperty(nano.split('@')[0])) return reply("Antri dulu, tunggu yang lain lagi main :v")
				if (args.length != 0) return reply(han.noneed())
				get_result = await fetchJson(`https://api.lolhuman.xyz/api/tebak/jenaka?apikey=${lol}`)
				if (get_result.status == '200') {
					get_result = get_result.result
					tebakbender = `*${get_result.question}*\n\nSisa waktu : _20 Detik lagi_ …`
					jawaban = get_result.answer
					await zero.sendMessage(from, tebakbender, text, { quoted: zer }).then(() => {
						tebakgambar[nano.split('@')[0]] = jawaban.toLowerCase()
						fs.writeFileSync("./storage/tebakgambar.json", JSON.stringify(tebakgambar))
					})
					await sleep(20000)
					if (tebakgambar.hasOwnProperty(nano.split('@')[0])) {
						reply("Jawaban: *" + jawaban + "*")
						limitAdd(sender, limit)
						delete tebakgambar[nano.split('@')[0]]
						fs.writeFileSync("./storage/tebakgambar.json", JSON.stringify(tebakgambar))
					}
				} else {
					reply(han.err())
					delete tebakgambar[nano.split('@')[0]]
					fs.writeFileSync("./storage/tebakgambar.json", JSON.stringify(tebakgambar))
				}
				break
			case 'tebakchara':
				if (!isGroup && !isPremium) return reply(han.groupp())
				if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(han.limitend(pushname))
				if (tebakgambar.hasOwnProperty(nano.split('@')[0])) return reply("Antri dulu, tunggu yang lain lagi main :v")
				if (args.length != 0) return reply(han.noneed())
				get_result = await fetchJson(`https://api.lolhuman.xyz/api/tebakchara?apikey=${lol}`)
				if (get_result.status == '200') {
					get_result = get_result.result
					thumbnail = await getBuffer(get_result.image)
					tebakchara = `*Siapa nama karakter ini?*\n\nSisa waktu : _20 Detik lagi_ …`
					jawaban = get_result.name
					await zero.sendMessage(from, thumbnail, image, { quoted: zer, caption: tebakchara }).then(() => {
						tebakgambar[nano.split('@')[0]] = jawaban.toLowerCase()
						fs.writeFileSync("./storage/tebakgambar.json", JSON.stringify(tebakgambar))
					})
					await sleep(20000)
					if (tebakgambar.hasOwnProperty(nano.split('@')[0])) {
						reply("Nama Karakter :\n*" + jawaban + "*")
						limitAdd(sender, limit)
						delete tebakgambar[nano.split('@')[0]]
						fs.writeFileSync("./storage/tebakgambar.json", JSON.stringify(tebakgambar))
					}
				} else {
					reply(han.err())
					delete tebakgambar[nano.split('@')[0]]
					fs.writeFileSync("./storage/tebakgambar.json", JSON.stringify(tebakgambar))
				}
				break
			case 'siapaaku':
				if (!isGroup && !isPremium) return reply(han.groupp())
				if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(han.limitend(pushname))
				if (tebakgambar.hasOwnProperty(nano.split('@')[0])) return reply("Antri dulu, tunggu yang lain lagi main :v")
				if (args.length != 0) return reply(han.noneed())
				get_result = await fetchJson(`https://api.lolhuman.xyz/api/tebak/siapaaku?apikey=${lol}`)
				if (get_result.status == '200') {
					get_result = get_result.result
					tebakbender = `*${get_result.question}*\n\nSisa waktu : _25 Detik lagi_ …`
					jawaban = get_result.answer
					await zero.sendMessage(from, tebakbender, text, { quoted: zer }).then(() => {
						tebakgambar[nano.split('@')[0]] = jawaban.toLowerCase()
						fs.writeFileSync("./storage/tebakgambar.json", JSON.stringify(tebakgambar))
					})
					await sleep(25000)
					if (tebakgambar.hasOwnProperty(nano.split('@')[0])) {
						reply(get_result.question + "\n\nJawaban: *" + jawaban + "*")
						limitAdd(sender, limit)
						delete tebakgambar[nano.split('@')[0]]
						fs.writeFileSync("./storage/tebakgambar.json", JSON.stringify(tebakgambar))
					}
				} else {
					reply(han.err())
					delete tebakgambar[nano.split('@')[0]]
					fs.writeFileSync("./storage/tebakgambar.json", JSON.stringify(tebakgambar))
				}
				break
			case 'asahotak':
				if (!isGroup && !isPremium) return reply(han.groupp())
				if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(han.limitend(pushname))
				if (tebakgambar.hasOwnProperty(nano.split('@')[0])) return reply("Antri dulu, tunggu yang lain lagi main :v")
				if (args.length != 0) return reply(han.noneed())
				get_result = await fetchJson(`https://api.lolhuman.xyz/api/tebak/asahotak?apikey=${lol}`)
				if (get_result.status == '200') {
					get_result = get_result.result
					tebakbender = `*${get_result.pertanyaan}*\n\nSisa waktu : _20 Detik lagi_ …`
					jawaban = get_result.jawaban
					await zero.sendMessage(from, tebakbender, text, { quoted: zer }).then(() => {
						tebakgambar[nano.split('@')[0]] = jawaban.toLowerCase()
						fs.writeFileSync("./storage/tebakgambar.json", JSON.stringify(tebakgambar))
					})
					await sleep(20000)
					if (tebakgambar.hasOwnProperty(nano.split('@')[0])) {
						reply("Jawaban: *" + jawaban + "*")
						limitAdd(sender, limit)
						delete tebakgambar[nano.split('@')[0]]
						fs.writeFileSync("./storage/tebakgambar.json", JSON.stringify(tebakgambar))
					}
				} else {
					reply(han.err())
					delete tebakgambar[nano.split('@')[0]]
					fs.writeFileSync("./storage/tebakgambar.json", JSON.stringify(tebakgambar))
				}
				break
			case 'caklontong':
				if (!isGroup && !isPremium) return reply(han.groupp())
				if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(han.limitend(pushname)) // case by piyo-chan
				if (tebakgambar.hasOwnProperty(nano.split('@')[0])) return reply("Antri dulu, tunggu yang lain lagi main :v")
				if (args.length != 0) return reply(han.noneed())
				get_result = await fetchJson(`https://api.lolhuman.xyz/api/tebak/caklontong2?apikey=${lol}`)
				if (get_result.status == '200') {
					get_result = get_result.result
					cak = `*${get_result.question}*\n\nSisa waktu : _30 Detik lagi_ …`
					cok = get_result.question
					jawaban = get_result.answer
					infor = get_result.information
					await zero.sendMessage(from, cak, text, { quoted: zer }).then(() => {
						tebakgambar[nano.split('@')[0]] = jawaban.toLowerCase()
						fs.writeFileSync("./storage/tebakgambar.json", JSON.stringify(tebakgambar))
					})
					await sleep(30000)
					if (tebakgambar.hasOwnProperty(nano.split('@')[0])) {
						reply(cok + "\n➸ Jawaban: *" + jawaban + "*\n\nPenjelasan : " + infor)
						limitAdd(sender, limit)
						delete tebakgambar[nano.split('@')[0]]
						fs.writeFileSync("./storage/tebakgambar.json", JSON.stringify(tebakgambar))
					}
				} else {
					reply(han.err())
					delete tebakgambar[nano.split('@')[0]]
					fs.writeFileSync("./storage/tebakgambar.json", JSON.stringify(tebakgambar))
				}
				break
			case 'susunkata':
				if (!isGroup && !isPremium) return reply(han.groupp())
				if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(han.limitend(pushname)) 
				if (tebakgambar.hasOwnProperty(nano.split('@')[0])) return reply("Antri dulu, tunggu yang lain lagi main :v")
				if (args.length != 0) return reply(han.noneed())
				get_result = await fetchJson(`https://api.lolhuman.xyz/api/tebak/susunkata?apikey=${lol}`)
				if (get_result.status == '200') {
					get_result = get_result.result
					cak = `*${get_result.pertanyaan}*\n\nSisa waktu : _10 Detik lagi_ …`
					cok = get_result.pertanyaan
					jawaban = get_result.jawaban
					await zero.sendMessage(from, cak, text, { quoted: zer }).then(() => {
						tebakgambar[nano.split('@')[0]] = jawaban.toLowerCase()
						fs.writeFileSync("./storage/tebakgambar.json", JSON.stringify(tebakgambar))
					})
					await sleep(10000)
					if (tebakgambar.hasOwnProperty(nano.split('@')[0])) {
						reply(cok + "\n➸ Jawaban: *" + jawaban + "*")
						limitAdd(sender, limit)
						delete tebakgambar[nano.split('@')[0]]
						fs.writeFileSync("./storage/tebakgambar.json", JSON.stringify(tebakgambar))
					}
				} else {
					reply(han.err())
					delete tebakgambar[nano.split('@')[0]]
					fs.writeFileSync("./storage/tebakgambar.json", JSON.stringify(tebakgambar))
				}
				break
			case 'batal':
			case 'cancel':
				if (!isGroup && !isPremium) return reply(han.groupp())
				if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(han.limitend(pushname))
				if (!tebakgambar.hasOwnProperty(nano.split('@')[0]) && !antripdf.hasOwnProperty(nano.split('@')[0]) && !antrivideo.hasOwnProperty(nano.split('@')[0]) && !antriaudio.hasOwnProperty(nano.split('@')[0])) return reply("Tidak ada antrian sebelumnya")
				delete tebakgambar[nano.split('@')[0]]
				fs.writeFileSync("./storage/tebakgambar.json", JSON.stringify(tebakgambar))
				delete antripdf[nano.split('@')[0]]
				fs.writeFileSync("./storage/antripdf.json", JSON.stringify(antripdf))
				delete antriaudio[nano.split('@')[0]]
				fs.writeFileSync("./storage/antriaudio.json", JSON.stringify(antriaudio))
				delete antrivideo[nano.split('@')[0]]
				fs.writeFileSync("./storage/antrivideo.json", JSON.stringify(antrivideo))
				reply("*Sukses mereset!*")
				break

			// GENSHIN DEV API //
			case 'gichara':
			case 'genshin':
			case 'gi':
				if (args.length == 0) return reply(`Example: ${prefix + command} ganyu`)
				query = args.join(" ")
				try {
					get_result = await fetchJson(`https://api.genshin.dev/characters/${query}`)
					get_list = await fetchJson(`https://api.genshin.dev/characters`)
					try {
						thumbnail = fs.readFileSync(`./genshin/${query}.jpg`)
					} catch {
						thumbnail = fs.readFileSync(`./genshin/paimon.jpg`)
					}
					if (get_result.name != undefined) {
						ini_txt = `_‟${get_result.description}”_\n\n`
						ini_txt += `*Name : ${get_result.name}*\n`
						if (get_result.title != undefined) {
							ini_txt += `*Title :* ${get_result.title}\n`
						} else {
							ini_txt += `*Title : -*\n`
						}
						ini_txt += `*Vision :* ${get_result.vision}\n`
						ini_txt += `*Weapon :* ${get_result.weapon}\n\n`
						if (get_result.gender != undefined) {
							ini_txt += `*Gender :* ${get_result.gender}\n`
						} else {
							ini_txt += `*Gender :*\n`
						}
						ini_txt += `*Nation :* ${get_result.nation}\n`
						ini_txt += `*Affiliation : ${get_result.affiliation}*\n\n`
						if (get_result.specialDish != undefined) {
							ini_txt += `*Special Dish :* ${get_result.specialDish}\n`
						} else {
							ini_txt += `*Special Dish : -*\n`
						}
						ini_txt += `*Rarity : ${get_result.rarity}*\n`
						ini_txt += `*Constellation : ${get_result.constellation}*\n`
						ini_txt += `*Birthday :* ${get_result.birthday}`
						//await reply(ini_txt)
						await zero.sendMessage(from, thumbnail, image, { quoted: zer, caption: ini_txt })
						try {
							get_voice = await fetchJson(`https://api.lolhuman.xyz/api/genshin/${query}?apikey=${lol}`)
							ini_voice = await getBuffer(get_voice.result.cv[0].audio[0])
							await zero.sendMessage(from, ini_voice, audio, { quoted: zer, mimetype: Mimetype.mp4Audio })
						} catch (e) {
							console.log(e)
							zero.sendMessage(from,`*Audio not available.*`, text)
						}
					} else {
						try {
							ini_txt = `*Not Found*\n\n*Available characters is :*\n${get_list.join(", ")}`
							await reply(ini_txt)
						} catch (e) {
							reply(han.err())
							console.log(e)
						}
					}
				} catch (e) {
					console.log(e)
					reply(han.err())
				}
				break
			case 'giartifact':
				if (args.length == 0) return reply(`Example: ${prefix + command} berserker`)
				query = args.join(" ")
				try {
					get_result = await fetchJson(`https://api.genshin.dev/artifacts/${query}`)
					get_list = await fetchJson(`https://api.genshin.dev/artifacts`)
					if (get_result.name != undefined) {
						ini_txt = `*Name : ${get_result.name}*\n\n`
						ini_txt += `*Max Rarity :* ${get_result.max_rarity}\n\n`
						ini_txt += `*2-pcs bonus :*\n${get_result["2-piece_bonus"]}\n`
						ini_txt += `*4-pcs bonus :*\n${get_result["4-piece_bonus"]}\n`
						await reply(ini_txt)
					} else {
						try {
							ini_txt = `*Not Found*\n\n*Available artifacts is :*\n${get_list.join(", ")}`
							await reply(ini_txt)
						} catch (e) {
							reply(han.err())
							console.log(e)
						}
					}
				} catch (e) {
					console.log(e)
					reply(han.err())
				}
				break
			/*case 'giconsumable':
				if (!isGroup && !isPremium) return reply(han.groupp())
				if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(han.limitend(pushname))
				if (args.length == 0) return reply(`Example: ${prefix + command} food`)
				query = args.join(" ")
				try {
					get_result = await fetchJson(`https://api.genshin.dev/consumables/${query}`)
					get_list = await fetchJson(`https://api.genshin.dev/consumables`)
					if (get_result.name != undefined) {
						ini_txt = `‟${get_result.description}”\n\n`
						ini_txt += `*Name : ${get_result.name}*\n`
						await reply(ini_txt)
					} else {
						try {
							ini_txt = `*Not Found*\n\n*Available items is :*\n${get_list.join(", ")}`
							await reply(ini_txt)
						} catch (e) {
							reply(han.err())
							console.log(e)
						}
					}
				} catch (e) {
					console.log(e)
					reply(han.err())
				}
				break*/
			case 'gidomain':
				if (args.length == 0) return reply(`Example: ${prefix + command} cecilia-garden`)
				query = args.join(" ")
				try {
					get_result = await fetchJson(`https://api.genshin.dev/domains/${query}`)
					get_list = await fetchJson(`https://api.genshin.dev/domains`)
					if (get_result.name != undefined) {
						ini_txt = `_${get_result.description}_\n\n`
						ini_txt += `*Name : ${get_result.name}*\n`
						ini_txt += `*Type :* ${get_result.type}\n`
						ini_txt += `*Location:* ${get_result.location}\n`
						ini_txt += `*Nation :* ${get_result.nation}\n`
						await reply(ini_txt)
					} else {
						try {
							ini_txt = `*Not Found*\n\n*Available domains :*\n${get_list.join(", ")}`
							await reply(ini_txt)
						} catch (e) {
							reply(han.err())
							console.log(e)
						}
					}
				} catch (e) {
					console.log(e)
					reply(han.err())
				}
				break
			case 'gielement':
				if (args.length == 0) return reply(`Example: ${prefix + command} anemo`)
				query = args.join(" ")
				try {
					get_result = await fetchJson(`https://api.genshin.dev/elements/${query}`)
					get_list = await fetchJson(`https://api.genshin.dev/elements`)
					if (get_result.name != undefined) {
						ini_txt = `*Name : ${get_result.name}*\n`
						ini_txt += `*Key :* ${get_result.key}`
						for (var x in get_result.reactions) {
							ini_txt += `\n\n*Reaction Name : ${get_result.reactions[x].name}*\n`
							ini_txt += `*Elements* : `
							for (var y in get_result.reactions[x].elements) {
								ini_txt += ` ${get_result.reactions[x].elements[y]}, `
							}
							ini_txt += `\n*Description :*\n${get_result.reactions[x].description}\n`
							ini_txt += `───────────────────`
						}
						await reply(ini_txt)
					} else {
						try {
							ini_txt = `*Not Found*\n\n*Available elements :*\n${get_list.join(", ")}`
							await reply(ini_txt)
						} catch (e) {
							reply(han.err())
							console.log(e)
						}
					}
				} catch (e) {
					console.log(e)
					reply(han.err())
				}
				break
			case 'gienemy':
				if (args.length == 0) return reply(`Example: ${prefix + command} hilichurl`)
				query = args.join(" ")
				try {
					get_result = await fetchJson(`https://api.genshin.dev/enemies/${query}`)
					get_list = await fetchJson(`https://api.genshin.dev/enemies`)
					if (get_result.name != undefined) {
						ini_txt = `_${get_result.description}_\n\n`
						ini_txt += `*Name : ${get_result.name}*\n`
						ini_txt += `*Region :* ${get_result.region}\n`
						ini_txt += `*Type :* ${get_result.type}\n`
						ini_txt += `*Family :* ${get_result.family}`
						await reply(ini_txt)
					} else {
						try {
							ini_txt = `*Not Found*\n\n*Available enemies :*\n${get_list.join(", ")}`
							await reply(ini_txt)
						} catch (e) {
							reply(han.err())
							console.log(e)
						}
					}
				} catch (e) {
					console.log(e)
					reply(han.err())
				}
				break
			/*case 'gimaterial':
				if (!isGroup && !isPremium) return reply(han.groupp())
				if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(han.limitend(pushname))
				if (args.length == 0) return reply(`Example: ${prefix + command} talent-book`)
				query = args.join(" ")
				try {
					get_result = await fetchJson(`https://api.genshin.dev/materials/${query}`)
					get_list = await fetchJson(`https://api.genshin.dev/materials`)
					if (get_result.freedom != undefined) {
						ini_txt = `*Characters :*\n${get_result.freedom.characters.join(", ")}\n\n`
						ini_txt += `*Availability :*\n${get_result.freedom.availability.join(", ")}\n\n`
						ini_txt += `*Source :*\n${get_result.freedom.source}`
						await reply(ini_txt)
					} else {
						try {
							ini_txt = `*Not Found*\n\n*Available materials :*\n${get_list.join(", ")}`
							await reply(ini_txt)
						} catch (e) {
							reply(han.err())
							console.log(e)
						}
					}
				} catch (e) {
					console.log(e)
					reply(han.err())
				}
				break*/
			case 'gination':
				if (args.length == 0) return reply(`Example: ${prefix + command} liyue`)
				query = args.join(" ")
				try {
					get_result = await fetchJson(`https://api.genshin.dev/nations/${query}`)
					get_list = await fetchJson(`https://api.genshin.dev/nations`)
					if (get_result.name != undefined) {
						ini_txt = `*Name : ${get_result.name}*\n\n`
						ini_txt += `*Element :* ${get_result.element}\n`
						ini_txt += `*Archon :* ${get_result.element}\n`
						ini_txt += `*ControllingEntity : ${get_result.controllingEntity}*`
						await reply(ini_txt)
					} else {
						try {
							ini_txt = `*Not Found*\n\n*Available nations :*\n${get_list.join(", ")}`
							await reply(ini_txt)
						} catch (e) {
							reply(han.err())
							console.log(e)
						}
					}
				} catch (e) {
					console.log(e)
					reply(han.err())
				}
				break
			case 'giweapon':
				if (args.length == 0) return reply(`Example: ${prefix + command} amos-bow`)
				query = args.join(" ")
				try {
					get_result = await fetchJson(`https://api.genshin.dev/weapons/${query}`)
					get_list = await fetchJson(`https://api.genshin.dev/weapons`)
					if (get_result.name != undefined) {
						ini_txt = `*${get_result.name}*\n`
						ini_txt += `*Obtained From :* ${get_result.location}\n\n`
						ini_txt += `*Type :* ${get_result.type}\n`
						ini_txt += `*Rarity :* ${get_result.rarity}\n`
						ini_txt += `*Base ATK* : ${get_result.baseAttack}\n`
						ini_txt += `*SubStat : ${get_result.subStat}*\n\n`
						ini_txt += `*Passive : ${get_result.passiveName}*\n`
						ini_txt += `${get_result.passiveDesc}`
						await reply(ini_txt)
					} else {
						try {
							ini_txt = `*Not Found*\n\n*Available weapons :*\n${get_list.join(", ")}`
							await reply(ini_txt)
						} catch (e) {
							reply(han.err())
							console.log(e)
						}
					}
				} catch (e) {
					console.log(e)
					reply(han.err())
				}
				break

			// MENU ANIME //
			case 'wait':
			case 'whatnime':
			case 'whatanime':
				if (!isGroup && !isPremium) return reply(han.groupp())
				if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(han.limitend(pushname))
				if (args.length != 0) return reply(han.noneed())
				var imgbb = require('imgbb-uploader')
				if ((isMedia && !zer.message.videoMessage || isQuotedImage) && args.length == 0) {
					ted = isQuotedImage ? JSON.parse(JSON.stringify(zer).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: zer
					owgi = await zero.downloadAndSaveMediaMessage(ted)
					anu = await imgbb("7b2fde1f55b9a594d5db403f0a0c2712", owgi)
					try {
						get_result = await fetchJson(`https://api.lolhuman.xyz/api/wait?apikey=${lol}&img=${anu.display_url}`, {method: 'get'})
						if (get_result.status == '200') {
							get_result = get_result.result
							ini_video = await getBuffer(get_result.video)
							ini_txt = `Anilist id : ${get_result.anilist_id}\n`
							ini_txt += `MAL id : ${get_result.mal_id}\n\n`
							ini_txt += `Title : *${get_result.title_romaji}*\n`
							ini_txt += `Native : *${get_result.title_native}*\n`
							ini_txt += `English : *${get_result.title_english}*\n\n`
							ini_txt += `at : ${get_result.at}\n`
							ini_txt += `Episode : ${get_result.episode}\n`
							ini_txt += `*Similarity : ${get_result.similarity}%*`
							await zero.sendMessage(from, ini_video, video, { quoted: zer, caption: ini_txt })
							limitAdd(sender, limit)
						} else {
							reply('Anime not found.')
						}
					} catch (e) {
						reply(han.err())
						console.log(e)
					}
				} else {
					reply(`Kirim gambar dengan caption *${prefix + command}* atau tag gambar yang sudah dikirim`)
				}
				break
			case 'wmit':
			case 'whatmanga':
				if (!isGroup && !isPremium) return reply(han.groupp())
				if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(han.limitend(pushname))
				if (args.length != 0) return reply(han.noneed())
				var imgbb = require('imgbb-uploader')
				if ((isMedia && !zer.message.videoMessage || isQuotedImage) && args.length == 0) {
					ted = isQuotedImage ? JSON.parse(JSON.stringify(zer).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: zer
					owgi = await zero.downloadAndSaveMediaMessage(ted)
					anu = await imgbb("7b2fde1f55b9a594d5db403f0a0c2712", owgi)
					try {
						get_result = await fetchJson(`https://api.lolhuman.xyz/api/wmit?apikey=${lol}&img=${anu.display_url}`, {method: 'get'})
						get_result = get_result.result
						ini_txt = `*RESULT :*`
						for (var x in get_result) {
							ini_txt += `\n\n*Title : ${get_result[x].title}*\n`
							ini_txt += `*Part :* ${get_result[x].part}\n`
							ini_txt += `*Url :*\n`
							for (var y in get_result[x].urls) {
								ini_txt += `*-* ${get_result[x].urls[y]}\n`
							}
							ini_txt += `*Similarity : ${get_result[x].similarity}%*\n`
							ini_txt += `───────────────────`
						}
						reply(ini_txt)
						limitAdd(sender, limit)
					} catch (e) {
						reply('Manga not Found.')
						console.log(e)
					}
				} else {
					reply(`Kirim gambar dengan caption *${prefix + command}* atau tag gambar yang sudah dikirim`)
				}
				break
			case 'manga':
				if (!isGroup && !isPremium) return reply(han.groupp())
				if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(han.limitend(pushname))
				if (args.length == 0) return reply(`Example: ${prefix + command} Gotoubun No Hanayome`)
				query = args.join(" ")
				try {
					get_result = await fetchJson(`https://api.lolhuman.xyz/api/manga?apikey=${lol}&query=${query}`)
					if (get_result.status == '200') {
						get_result = get_result.result
						ini_txt = `Id : ${get_result.id}\n`
						ini_txt += `Id MAL : ${get_result.idMal}\n\n`
						ini_txt += `Title : *${get_result.title.romaji}*\n`
						ini_txt += `English : *${get_result.title.english}*\n`
						ini_txt += `Native : *${get_result.title.native}*\n\n`
						ini_txt += `Format : ${get_result.format}\n`
						ini_txt += `Chapters : ${get_result.chapters}\n`
						ini_txt += `Volume : ${get_result.volumes}\n`
						ini_txt += `Status : ${get_result.status}\n`
						ini_txt += `Source : ${get_result.source}\n`
						ini_txt += `Start Date : ${get_result.startDate.day} - ${get_result.startDate.month} - ${get_result.startDate.year}\n`
						ini_txt += `End Date : ${get_result.endDate.day} - ${get_result.endDate.month} - ${get_result.endDate.year}\n`
						ini_txt += `*Genre : ${get_result.genres.join(", ")}*\n\n`
						ini_txt += `Synonyms : ${get_result.synonyms.join(", ")}\n`
						ini_txt += `*Score : ${get_result.averageScore}%*\n\n`
						ini_txt += `*Characters :*\n`
						ini_character = get_result.characters.nodes
						for (var x of ini_character) {
							ini_txt += `- ${x.name.full} (${x.name.native})\n`
						}
						ini_txt += `\n*Description :*\n${get_result.description}`
						thumbnail = await getBuffer(get_result.coverImage.large)
						await zero.sendMessage(from, thumbnail, image, { quoted: zer, caption: ini_txt })
						limitAdd(sender, limit)
					} else {
						reply('Manga not found.')		
					}
				} catch (e) {
					console.log(e)
					reply(han.err())
				}
				break
			case 'anime':
				if (!isGroup && !isPremium) return reply(han.groupp())
				if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(han.limitend(pushname))
				if (args.length == 0) return reply(`Example: ${prefix + command} Gotoubun No Hanayome`)
				query = args.join(" ")
				try {
					get_result = await fetchJson(`https://api.lolhuman.xyz/api/anime?apikey=${lol}&query=${query}`)
					if (get_result.status == '200') {
						get_result = get_result.result
						ini_txt = `Title : *${get_result.title.romaji}*\n`
						ini_txt += `English : *${get_result.title.english}*\n`
						ini_txt += `Native : *${get_result.title.native}*\n\n`
						ini_txt += `Format : ${get_result.format}\n`
						ini_txt += `Episodes : ${get_result.episodes}\n`
						ini_txt += `Duration : ${get_result.duration} mins.\n`
						ini_txt += `Status : ${get_result.status}\n`
						ini_txt += `Season : ${get_result.season}\n`
						ini_txt += `Season Year : ${get_result.seasonYear}\n`
						ini_txt += `Source : ${get_result.source}\n`
						ini_txt += `Start Date : ${get_result.startDate.day} - ${get_result.startDate.month} - ${get_result.startDate.year}\n`
						ini_txt += `End Date : ${get_result.endDate.day} - ${get_result.endDate.month} - ${get_result.endDate.year}\n`
						ini_txt += `Genre : ${get_result.genres.join(", ")}\n`
						ini_txt += `Synonyms : ${get_result.synonyms.join(", ")}\n`
						ini_txt += `*Score : ${get_result.averageScore}%*\n\n`
						ini_txt += `*Characters :*\n`
						ini_character = get_result.characters.nodes
						for (var x of ini_character) {
							ini_txt += `- ${x.name.full} (${x.name.native})\n`
						}
						ini_txt += `\n*Description :*\n${get_result.description}`
						thumbnail = await getBuffer(get_result.coverImage.large)
						await zero.sendMessage(from, thumbnail, image, { quoted: zer, caption: ini_txt })
						limitAdd(sender, limit)
					} else {
						reply('Anime not found.')		
					}
				} catch (e) {
					console.log(e)
					reply(han.err())
				}
				break
			case 'character':
				if (!isGroup && !isPremium) return reply(han.groupp())
				if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(han.limitend(pushname))
				if (args.length == 0) return reply(`Example: ${prefix + command} Miku Nakano`)
				query = args.join(" ")
				try {
					get_result = await fetchJson(`https://api.lolhuman.xyz/api/character?apikey=${lol}&query=${query}`)
					if (get_result.status == '200') {
						get_result = get_result.result
						ini_txt = `Id : ${get_result.id}\n\n`
						ini_txt += `Name : *${get_result.name.full}*\n`
						ini_txt += `Native : *${get_result.name.native}*\n`
						ini_txt += `Favorites : ${get_result.favourites}\n\n`
						ini_txt += `*Media :*\n`
						ini_media = get_result.media.nodes
						for (var x of ini_media) {
							ini_txt += `- ${x.title.romaji} (${x.title.native})\n`
						}
						ini_txt += `\n*Description :*\n${get_result.description.replace(/__/g, "_")}`
						thumbnail = await getBuffer(get_result.image.large)
						await zero.sendMessage(from, thumbnail, image, { quoted: zer, caption: ini_txt })
						limitAdd(sender, limit)
					} else {
						reply('Character not found.')		
					}
				} catch (e) {
					console.log(e)
					reply(han.err())
				}
				break
			case 'kusonime':
			case 'kusonimeweb':
				if (!isGroup && !isPremium) return reply(han.groupp())
				if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(han.limitend(pushname))
				if (args.length < 1) return reply(`For searching anime / batch :\nUsage : *${prefix + command} query*\n\nFor show info / download link :\nUsage : *${prefix + command} kusonime_url*`)
				if (q.includes('http://') || q.includes('https://')) {
					if (!q.includes('kusonime')) return reply('Bukan web kusonime itu bre')
					ini_url = args[0]
					try {
						get_result = await fetchJson(`https://api.lolhuman.xyz/api/kusonime?apikey=${lol}&url=${ini_url}`)
						if (get_result.status == '200') {
							get_result = get_result.result
							ini_txt = `*${get_result.title}*\n\n`
							ini_txt += `Japanese : *${get_result.japanese}*\n`
							ini_txt += `Genre : ${get_result.genre}\n`
							ini_txt += `Seasons : ${get_result.seasons}\n`
							ini_txt += `Producers : ${get_result.producers}\n\n`
							ini_txt += `*Type :* ${get_result.type}\n`
							ini_txt += `Status : ${get_result.status}\n`
							ini_txt += `Total Episode : ${get_result.total_episode}\n`
							ini_txt += `*Score : ${get_result.score}*\n`
							ini_txt += `Duration : ${get_result.duration}\n`
							ini_txt += `Released On : ${get_result.released_on}\n\n`
							ini_txt += `*Desc :* ${get_result.desc}\n`
							link_dl = get_result.link_dl
							for (var x in link_dl) {
								ini_txt += `\n${x}\n`
								for (var y in link_dl[x]) {
							ini_txt += `${y} - ${link_dl[x][y]}\n───────────────────\n`
								}
							}
							ini_buffer = await getBuffer(get_result.thumbnail)
							await zero.sendMessage(from, ini_buffer, image, { quoted: zer, caption: ini_txt })
							limitAdd(sender, limit)
						} else {
							reply('Anime not found.')		
						}
					} catch (e) {
						console.log(e)
						reply(han.err())
					}
				} else {
					query = args.join(" ")
					try {
						get_result = await fetchJson(`https://api.lolhuman.xyz/api/kusonimesearch?apikey=${lol}&query=${query}`)
						if (get_result.status == '200') {
							get_result = get_result.result
							ini_txt = `*${get_result.title}*\n\n`
							ini_txt += `Japanese : *${get_result.japanese}*\n`
							ini_txt += `Genre : ${get_result.genre}\n`
							ini_txt += `Seasons : ${get_result.seasons}\n`
							ini_txt += `Producers : ${get_result.producers}\n`
							ini_txt += `Type : ${get_result.type}\n`
							ini_txt += `Status : ${get_result.status}\n`
							ini_txt += `Total Episode : ${get_result.total_episode}\n`
							ini_txt += `*Score : ${get_result.score}*\n`
							ini_txt += `Duration : ${get_result.duration}\n`
							ini_txt += `Released On : ${get_result.released_on}\n`
							ini_txt += `Desc : ${get_result.desc}\n`
							link_dl = get_result.link_dl
							for (var x in link_dl) {
								ini_txt += `\n${x}\n`
								for (var y in link_dl[x]) {
							ini_txt += `${y} - ${link_dl[x][y]}\n───────────────────\n`
								}
							}
							ini_buffer = await getBuffer(get_result.thumbnail)
							await zero.sendMessage(from, ini_buffer, image, { quoted: zer, caption: ini_txt })
							limitAdd(sender, limit)
						} else {
							reply('Details not found.')		
						}
					} catch (e) {
						console.log(e)
						reply(han.err())
					}
				}
				break
			case 'otakudesu':
			case 'otakudesuweb':
				if (!isGroup && !isPremium) return reply(han.groupp())
				if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(han.limitend(pushname))
				if (args.length < 1) return reply(`For searching info anime :\nUsage : *${prefix + command} query*\n\nFor show info / download link :\nUsage : *${prefix + command} otakudesu_link*`)
				if (q.includes('http://') || q.includes('https://')) {
					if (!q.includes('otakudesu')) return reply('Itu web otakudesu bukan?')
					ini_url = args[0]
					try {
						get_result = await fetchJson(`https://api.lolhuman.xyz/api/otakudesu?apikey=${lol}&url=${ini_url}`)
						if (get_result.status == '200') {
							get_result = get_result.result
							ini_txt = `*${get_result.title}*\n\n`
							ini_txt += `Japanese : *${get_result.japanese}*\n`
							ini_txt += `Judul : ${get_result.judul}\n`
							ini_txt += `Type : ${get_result.type}\n`
							ini_txt += `Episode : ${get_result.episodes}\n`
							ini_txt += `Aired : ${get_result.aired}\n`
							ini_txt += `Producers : ${get_result.producers}\n`
							ini_txt += `Genre : ${get_result.genres}\n`
							ini_txt += `Duration : ${get_result.duration}\n`
							ini_txt += `Studios : ${get_result.status}\n`
							ini_txt += `*Rating : ${get_result.rating}*\n`
							ini_txt += `Credit : ${get_result.credit}\n`
							get_link = get_result.link_dl
							for (var x in get_link) {
								ini_txt += `\n\n*${get_link[x].title}*\n`
								for (var y in get_link[x].link_dl) {
							ini_info = get_link[x].link_dl[y]
							ini_txt += `\n\`\`\`Reso : \`\`\`${ini_info.reso}\n`
							ini_txt += `\`\`\`Size : \`\`\`${ini_info.size}\n`
							ini_txt += `\`\`\`Link : \`\`\`\n`
							down_link = ini_info.link_dl
							for (var z in down_link) {
								ini_txt += `${z} - ${down_link[z]}\n───────────────────\n`
							}
								}
							}
							reply(ini_txt)
							limitAdd(sender, limit)
						} else {
							reply('Details not found.')		
						}
					} catch (e) {
						console.log(e)
						reply(han.err())
					}
				} else {
					query = args.join(" ")
					try {
						get_result = await fetchJson(`https://api.lolhuman.xyz/api/otakudesusearch?apikey=${lol}&query=${query}`)
						if (get_result.status == '200') {
							get_result = get_result.result
							ini_txt = `*${get_result.title}*\n\n`
							ini_txt += `Japanese : *${get_result.japanese}*\n`
							ini_txt += `Judul : ${get_result.judul}\n`
							ini_txt += `Type : ${get_result.type}\n`
							ini_txt += `Episode : ${get_result.episodes}\n`
							ini_txt += `Aired : ${get_result.aired}\n`
							ini_txt += `Producers : ${get_result.producers}\n`
							ini_txt += `Genre : ${get_result.genres}\n`
							ini_txt += `Duration : ${get_result.duration}\n`
							ini_txt += `Studios : ${get_result.status}\n`
							ini_txt += `*Rating : ${get_result.rating}*\n`
							ini_txt += `Credit : ${get_result.credit}\n`
							get_link = get_result.link_dl
							for (var x in get_link) {
								ini_txt += `\n\n*${get_link[x].title}*\n`
								for (var y in get_link[x].link_dl) {
							ini_info = get_link[x].link_dl[y]
							ini_txt += `\n\`\`\`Reso : \`\`\`${ini_info.reso}\n`
							ini_txt += `\`\`\`Size : \`\`\`${ini_info.size}\n`
							ini_txt += `\`\`\`Link : \`\`\`\n`
							down_link = ini_info.link_dl
							for (var z in down_link) {
								ini_txt += `${z} - ${down_link[z]}\n───────────────────\n`
							}
								}
							}
							reply(ini_txt)
							limitAdd(sender, limit)
						} else {
							reply('Details not found.')		
						}
					} catch (e) {
						console.log(e)
						reply(han.err())
					}
				}
				break
			case 'bts':
			case 'exo':
			case 'cecan':
			case 'cogan':
			case 'blackpink':
			case 'elf':
			case 'neko':
			case 'waifu':
			case 'shota':
			case 'husbu':
			case 'sagiri':
			case 'elaina':
			case 'shinobu':
			case 'kanna':
			case 'megumin':
			case 'wallnime':
				if (!isGroup && !isPremium) return reply(han.groupp())
				if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(han.limitend(pushname))
				if (args.length != 0) return reply(han.noneed())
				zero.sendMessage(from,`*「 WAIT 」 DON'T SPAM*`, text)
				try {
					buffer = await getBuffer(`https://api.lolhuman.xyz/api/random/${command}?apikey=${lol}`)
					bba = await zero.prepareMessage(from, buffer, MessageType.image)
					buttons = [{buttonId:`${prefix + command}`,buttonText: {displayText: 'NEXT ▶'}, type: 1}]
					ButonsMerssages = {
						contentText: `_© ${NameBot}_`,
						buttons: buttons,
						footerText: `Klik Next Untuk Melanjutkan`,
						headerType: 4,
						imageMessage: bba.message.imageMessage
					}
					await zero.sendMessage(from, ButonsMerssages, MessageType.buttonsMessage, {quoted: zer})
					limitAdd(sender, limit)
				} catch (e) {
					console.log(e)
					reply(han.err())
				}
				break
			case 'waifu2':
				if (!isGroup && !isPremium) return reply(han.groupp())
				if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(han.limitend(pushname))
				if (args.length != 0) return reply(han.noneed())
				zero.sendMessage(from,`*「 WAIT 」 DON'T SPAM*`, text)
				try {
					buffer = await getBuffer(`https://api.waifu.pics/sfw/waifu`)
					bba = await zero.prepareMessage(from, buffer, MessageType.image)
					buttons = [{buttonId:`${prefix + command}`,buttonText: {displayText: 'NEXT ▶'}, type: 1}]
					ButonsMerssages = {
						contentText: `_© Waifu Pics Api_`,
						buttons: buttons,
						footerText: `Klik Next Untuk Melanjutkan`,
						headerType: 4,
						imageMessage: bba.message.imageMessage
					}
					await zero.sendMessage(from, ButonsMerssages, MessageType.buttonsMessage, {quoted: zer})
					limitAdd(sender, limit)
				} catch (e) {
					console.log(e)
					reply(han.err())
				}
				break
			case 'neko2':
				if (!isGroup) {
					zero.sendMessage(from,`*「 WAIT 」 DON'T SPAM*`, text)
					try {
						buffer = await getBuffer(`https://api.lolhuman.xyz/api/random2/neko?apikey=${lol}`)
						bba = await zero.prepareMessage(from, buffer, MessageType.image)
						buttons = [{buttonId:`${prefix + command}`,buttonText: {displayText: 'NEXT ▶'}, type: 1}]
						ButonsMerssages = {
							contentText: `_© Random Neko nyaa~~_`,
							buttons: buttons,
							footerText: `Klik Next Untuk Melanjutkan`,
							headerType: 4,
							imageMessage: bba.message.imageMessage
						}
						await zero.sendMessage(from, ButonsMerssages, MessageType.buttonsMessage, {quoted: zer})
					} catch (e) {
						console.log(e)
						reply(han.err())
					}
				} else {
					if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(han.limitend(pushname))
					if (args.length != 0) return reply(han.noneed())
					zero.sendMessage(from,`*「 WAIT 」 DON'T SPAM*`, text)
					try {
						buffer = await getBuffer(`https://api.lolhuman.xyz/api/random2/neko?apikey=${lol}`)
						bba = await zero.prepareMessage(from, buffer, MessageType.image)
						buttons = [{buttonId:`${prefix + command}`,buttonText: {displayText: 'NEXT ▶'}, type: 1}]
						ButonsMerssages = {
							contentText: `_© Random Neko nyaa~~_`,
							buttons: buttons,
							footerText: `Klik Next Untuk Melanjutkan`,
							headerType: 4,
							imageMessage: bba.message.imageMessage
						}
						await zero.sendMessage(from, ButonsMerssages, MessageType.buttonsMessage, {quoted: zer})
						limitAdd(sender, limit)
					} catch (e) {
						console.log(e)
						reply(han.err())
					}
				}
				break
			case 'holo':
			case 'kemonomimi':
			case 'fox_girl':
				if (!isGroup && !isPremium) return reply(han.groupp())
				if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(han.limitend(pushname))
				if (args.length != 0) return reply(han.noneed())
				zero.sendMessage(from,`*「 WAIT 」 DON'T SPAM*`, text)
				try {
					buffer = await getBuffer(`https://api.lolhuman.xyz/api/random2/${command}?apikey=${lol}`)
						bba = await zero.prepareMessage(from, buffer, MessageType.image)
					buttons = [{buttonId:`${prefix + command}`,buttonText: {displayText: 'NEXT ▶'}, type: 1}]
					ButonsMerssages = {
						contentText: `_© ${NameBot}_`,
						buttons: buttons,
						footerText: `Klik Next Untuk Melanjutkan`,
						headerType: 4,
						imageMessage: bba.message.imageMessage
					}
					await zero.sendMessage(from, ButonsMerssages, MessageType.buttonsMessage, {quoted: zer})
					limitAdd(sender, limit)
				} catch (e) {
					console.log(e)
					reply(han.err())
				}
				break
			case 'feed':
			case 'baka':
			case 'tickle':
				if (!isGroup && !isPremium) return reply(han.groupp())
				if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(han.limitend(pushname))
				if (args.length != 0) return reply(han.noneed())
				if (antrivideo.hasOwnProperty(nano.split('@')[0])) return reply("Seng Sabar.")
				nih = "SabarLah"
				antrivideo[nano.split('@')[0]] = nih.toLowerCase()
				fs.writeFileSync("./storage/antrivideo.json", JSON.stringify(antrivideo))
				try {
					zero.sendMessage(from,`*「 WAIT 」 DON'T SPAM*`, text)
					get_result2 = await fetchJson(`https://api.lolhuman.xyz/api/convert/webptomp4?apikey=${lol}&img=https://api.lolhuman.xyz/api/random2/${command}?apikey=${lol}`)
					ini_buffer = await getBuffer(get_result2.result)
					if (antrivideo.hasOwnProperty(nano.split('@')[0])) {
						sendButVideo(from,`━ ━ ━ ━ [ *${command}* ] ━ ━ ━ ━`.toUpperCase(),`_${NameBot}_`, ini_buffer, [{buttonId:`${prefix + command}`,buttonText: {displayText: 'NEXT ▶'}, type: 1}], {quoted:zer})
						limitAdd(sender, limit)
						delete antrivideo[nano.split('@')[0]]
						fs.writeFileSync("./storage/antrivideo.json", JSON.stringify(antrivideo))
					}
				} catch (e) {
					console.log(e)
					reply(han.err())
					delete antrivideo[nano.split('@')[0]]
					fs.writeFileSync("./storage/antrivideo.json", JSON.stringify(antrivideo))
				}
				break
			case 'poke':
			case 'kiss':
			case 'smug':
			case 'cuddle':
			case 'cry':
			case 'hug':
			case 'lick':
			case 'pat':
			case 'bonk':
			case 'blush':
			case 'handhold':
			case 'bite':
			case 'dance':
			case 'yeet':
			case 'smile':
			case 'wave':
			case 'highfive':
			case 'wave':
			case 'nom':
			case 'glomp':
			case 'slap':
			case 'kill':
			case 'happy':
			case 'wink':
			case 'cringe':
				if (!isGroup && !isPremium) return reply(han.groupp())
				if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(han.limitend(pushname))
				if (args.length != 0) return reply(han.noneed())
				if (antrivideo.hasOwnProperty(nano.split('@')[0])) return reply("Seng Sabar.")
				nih = "SabarLah"
				antrivideo[nano.split('@')[0]] = nih.toLowerCase()
				fs.writeFileSync("./storage/antrivideo.json", JSON.stringify(antrivideo))
				try {
					zero.sendMessage(from,`*「 WAIT 」 DON'T SPAM*`, text)
					get_result = await fetchJson(`https://api.waifu.pics/sfw/${command}`)
					get_result2 = await fetchJson(`https://api.lolhuman.xyz/api/convert/webptomp4?apikey=${lol}&img=${get_result.url}`)
					ini_buffer = await getBuffer(get_result2.result)
					if (antrivideo.hasOwnProperty(nano.split('@')[0])) {
						sendButVideo(from,`━ ━ ━ ━ [ *${command}* ] ━ ━ ━ ━`.toUpperCase(),`_${NameBot}_`, ini_buffer, [{buttonId:`${prefix + command}`,buttonText: {displayText: 'NEXT ▶'}, type: 1}], {quoted:zer})
						limitAdd(sender, limit)
						delete antrivideo[nano.split('@')[0]]
						fs.writeFileSync("./storage/antrivideo.json", JSON.stringify(antrivideo))
					}
				} catch (e) {
					console.log(e)
					reply(han.err())
					delete antrivideo[nano.split('@')[0]]
					fs.writeFileSync("./storage/antrivideo.json", JSON.stringify(antrivideo))
				}
				break
			/*case 'lick2':
				if (!isGroup && !isPremium) return reply(han.groupp())
				if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(han.limitend(pushname))
				if (args.length != 0) return reply(han.noneed())
				ranp = getRandom('.gif')
				rano = getRandom('.webp')
				ztick = fs.readFileSync(`./media/sticker/bronya.webp`)
				try {
					zero.sendMessage(from,`*「 WAIT 」 DON'T SPAM*`, text)
					ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/random/lick?apikey=${lol}`)
					exec(`wget "${ini_buffer}" -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						buff = fs.readFileSync(rano)
						zero.sendMessage(from, buff, sticker, { quoted: zer }).then(() => {
							fs.unlinkSync(rano)
							limitAdd(sender, limit)
							delete antristik[nano.split('@')[0]]
							fs.writeFileSync("./storage/antristik.json", JSON.stringify(antristik))
						})
					})
				} catch (e) {
					console.log(e)
					zero.sendMessage(from, ztick, sticker, { quoted: zer })
				}
				break*/

			// NSFW MENU //
			case 'bokep': case 'memek': case 'lesbi': case 'gay': case 'gey': case 'geh': case 'kontol':
				zero.sendMessage(from, `Nyari bahan ?\n*${prefix}menunsfw* solusinya`, text)
				break
			case 'cersex':
				if (!isGroup && !isPremium) return reply(han.groupp())
				if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(han.limitend(pushname))
				if (!isNsfw) return reply(han.nsfwoff())
				if (args.length != 0) return reply(han.noneed())
				get_result = await fetchJson(`https://docs-jojo.herokuapp.com/api/cersex`, {method: 'get'})
				try {
					get_result = get_result.result
					ini_txt = `*Title : ${get_result.judul}*\n\n`
					ini_txt += `*Story :*\n${get_result.cersex}\n`
					thumbnail = await getBuffer(get_result.img)
					await zero.sendMessage(from, thumbnail, image, { quoted: zer, caption: ini_txt })
					limitAdd(sender, limit)
				} catch (e) {
					console.log(e)
					reply(han.err())
				}
				break
			case 'nhentai':
			case 'nhentaiweb':
			case 'nhentaisearch':
				if (!isGroup && !isPremium) return reply(han.groupp())
				if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(han.limitend(pushname))
				if (!isNsfw) return reply(han.nsfwoff())
				if (args.length < 1) return reply(`Show info based code :\nUsage : *${prefix + command} 344253*\n\nFor finding sauce :\nUsage : *${prefix + command} title / query*`)
				if (isNaN(args[0]) || q.includes('-') || q.includes('+')) {
					query = args.join(" ")
					try {
						get_result = await fetchJson(`https://api.lolhuman.xyz/api/nhentaisearch?apikey=${lol}&query=${query}`)
						if (get_result.status == '200' && get_result.result != "") {
							get_result = get_result.result
							ini_txt = "*Result :*"
							for (var x of get_result) {
						ini_txt += `\n\nKode Nuklir : *${x.id}*\n`
						ini_txt += `English : *${x.title_english}*\n`
						ini_txt += `Japanese : *${x.title_japanese}*\n`
						ini_txt += `Native : *${x.title_native}*\n`
						ini_txt += `Upload : ${x.date_upload}\n`
						ini_txt += `Page : ${x.page}\n`
						ini_txt += `Favourite : ${x.favourite}\n`
						ini_txt += `───────────────────`
							}
							reply(ini_txt)
							limitAdd(sender, limit)
						} else if (get_result.status == '200' && get_result.result == "") {
							reply('0 Result.')
						} else {
							reply('doujin not found.')
						}
					} catch (e) {
						console.log(e)
						reply(han.err())
					}
				} else {
					//if (isNaN(args[0]) || q.includes('-') || q.includes('+')) return reply('Kode nuklir salah.')
					henid = args[0]
					try {
						get_result = await fetchJson(`https://api.lolhuman.xyz/api/nhentai/${henid}?apikey=${lol}`)
						if (get_result.status == '200') {
							get_result = get_result.result
							thumbnail = await getBuffer(get_result.image[0])
							bba = await zero.prepareMessage(from, thumbnail, MessageType.image)
							buttons = [{buttonId:`${prefix}nhentaipdf ${henid}`,buttonText: {displayText: 'DOWNLOAD PDF'}, type: 1}]
							ini_txt = `Romaji : *${get_result.title_romaji}*\n`
							ini_txt += `Native : *${get_result.title_native}*\n`
							get_info = get_result.info
							ini_txt += `Parodies : *${get_info.parodies}*\n\n`
							try {
								ini_txt += `*Character :* ${get_info.characters.join(", ")}\n`
							} catch {
								ini_txt += `*Character :* ${get_info.characters}\n`
							}
							try {
								ini_txt += `*Tags :* ${get_info.tags.join(", ")}\n\n`
							} catch {
								ini_txt += `*Tags :* ${get_info.tags}\n\n`
							}
							ini_txt += `Artist : *${get_info.artists}*\n`
							ini_txt += `Group : *${get_info.groups}*\n`
							try {
								ini_txt += `Languages : *${get_info.languages.join(", ")}*\n`
							} catch {
								ini_txt += `Languages : *${get_info.languages}*\n`
							}
							ini_txt += `Categories : *${get_info.categories}*\n`
							ini_txt += `*Pages : ${get_info.pages}*\n`
							ini_txt += `*Uploaded : ${get_info.uploaded}*\n`
							ButonsMerssages = {
								contentText: `${ini_txt}`,
								buttons: buttons,
								footerText: `Use *${prefix}nhentaipdf* if button doesn't work.`,
								headerType: 4,
								imageMessage: bba.message.imageMessage
							}
							await zero.sendMessage(from, ButonsMerssages, MessageType.buttonsMessage, {quoted: zer})
							//zero.sendMessage(from, thumbnail, image, {quoted: zer, caption: ini_txt})
							limitAdd(sender, limit)
						} else {
							reply('Doujin not found.')		
						}
					} catch (e) {
						console.log(e)
						reply(han.err())
					}
				}
				break
			case 'nhentaipdf':
				if (!isGroup && !isPremium) return reply(han.groupp())
				if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(han.limitend(pushname))
				if (!isNsfw) return reply(han.nsfwoff())
				if (antripdf.hasOwnProperty(nano.split('@')[0])) return reply("Sabar ajg, dasar sangean :v")
				if (args.length == 0) return reply(`Example: ${prefix + command} 344253`)
				if (isNaN(args[0]) || q.includes('-') || q.includes('+')) return reply('Yang bener gan masukin kode nuklirnya')
				henid = args[0]
				nih = "SabarLah"
				antripdf[nano.split('@')[0]] = nih.toLowerCase()
				fs.writeFileSync("./storage/antripdf.json", JSON.stringify(antripdf))
				try {
					zero.sendMessage(from,`*「 WAIT 」 DON'T SPAM*`, text)
					get_result = await fetchJson(`https://api.lolhuman.xyz/api/nhentaipdf/${henid}?apikey=${lol}`)
					if (get_result.status == '200') {
						get_result = get_result.result
						ini_buffer = await getBuffer(get_result)
						try {
							if (antripdf.hasOwnProperty(nano.split('@')[0])) {
								await zero.sendMessage(from, ini_buffer, document, { quoted: zer, mimetype: Mimetype.pdf, filename: `${henid}.pdf` })
								limitAdd(sender, limit)
								delete antripdf[nano.split('@')[0]]
								fs.writeFileSync("./storage/antripdf.json", JSON.stringify(antripdf))
							}
						} catch (e) {
							reply('[!] Failed to load PDF Document')
							console.log(e)
							delete antripdf[nano.split('@')[0]]
							fs.writeFileSync("./storage/antripdf.json", JSON.stringify(antripdf))
						}
					} else {
						reply('doujin not found')
						delete antripdf[nano.split('@')[0]]
						fs.writeFileSync("./storage/antripdf.json", JSON.stringify(antripdf))
					}
				} catch (e) {
					console.log(e)
					reply(han.err())
					delete antripdf[nano.split('@')[0]]
					fs.writeFileSync("./storage/antripdf.json", JSON.stringify(antripdf))
				}
				break
			case 'nekopoi':
			case 'nekopoiweb':
				if (!isGroup && !isPremium) return reply(han.groupp())
				if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(han.limitend(pushname))
				if (!isNsfw) return reply(han.nsfwoff())
				if (args.length < 1) return reply(`For searching in kucingpoi :\nUsage : *${prefix + command} isekai harem*\n\nFor show info / download link :\nUsage : *${prefix + command} nekopoi_url*`)
				if (q.includes('http://') || q.includes('https://')) {
					if (!q.includes('nekopoi')) return reply('Web kucing apa bukan itu oi..')
					ini_url = args[0]
					try {
						get_result = await fetchJson(`https://api.lolhuman.xyz/api/nekopoi?apikey=${lol}&url=${ini_url}`)
						if (get_result.status == '200') {
							get_result = get_result.result
							ini_txt = `*${get_result.anime}*\n\n`
							ini_txt += `Porducers : *${get_result.producers}*\n`
							ini_txt += `Duration : ${get_result.duration}\n`
							ini_txt += `Size : ${get_result.size}\n\n`
							ini_txt += `Sinopsis : ${get_result.sinopsis}\n`
							link = get_result.link
							for (var x in link) {
								ini_txt += `\n${link[x].name}\n`
								link_dl = link[x].link
									for (var y in link_dl) {
									ini_txt += `${y} - ${link_dl[y]}\n`
								}
							}
							ini_buffer = await getBuffer(get_result.thumb)
							await zero.sendMessage(from, ini_buffer, image, { quoted: zer, caption: ini_txt })
							limitAdd(sender, limit)
						} else {
							reply('0 Result.\nCobain pakai link episode nya gan.')
						}
					} catch (e) {
						console.log(e)
						reply(han.err())
					}
				} else {
					query = args.join(" ")
					try {
						get_result = await fetchJson(`https://api.lolhuman.xyz/api/nekopoisearch?apikey=${lol}&query=${query}`)
						if (get_result.status == '200') {
							get_result = get_result.result
							ini_txt = `Found : *${query}*`
							for (var x of get_result) {
								ini_txt += `\n\n*Title :* ${x.title}\n`
								ini_txt += `*Link :* ${x.link}\n`
								ini_txt += `*Thumbnail :* ${x.thumbnail}\n`
								ini_txt += `───────────────────`
							}
							ini_buffer = await getBuffer(get_result[0].thumbnail)
							await zero.sendMessage(from, ini_buffer, image, { quoted: zer, caption: ini_txt })
							limitAdd(sender, limit)
						} else {
							reply('Anime not found.')
						}
					} catch (e) {
						console.log(e)
						reply(han.err())
					}
				}
				break
			case 'xhamster':
			case 'xhamsterweb':
				if (!isGroup && !isPremium) return reply(han.groupp())
				if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(han.limitend(pushname))
				if (!isNsfw) return reply(han.nsfwoff())
				if (args.length < 1) return reply(`Just type query what u need :\nUsage : *${prefix + command} japanese*\n\nFor show info / download link :\nUsage : *${prefix + command} xhamster_url*`)
				if (q.includes('http://') || q.includes('https://')) {
					if (!q.includes('xhwide2')) return reply('Bukan website xhamster itu tod')
					query = args.join(" ")
					try {
						get_result = await fetchJson(`http://api.lolhuman.xyz/api/xhamster?apikey=${lol}&url=${query}`)
						if (get_result.status == '200') {
							get_result = get_result.result
							ini_txt = `*${get_result.title}*\n\n`
							ini_txt += `Duration : ${get_result.duration}\n`
							ini_txt += `Uploader : ${get_result.author}\n`
							ini_txt += `Upload : ${get_result.upload}\n`
							ini_txt += `View : ${get_result.views}\n`
							ini_txt += `*Rating : ${get_result.rating}*\n\n`
							ini_txt += `Like : ${get_result.likes}\n`
							ini_txt += `Dislike : ${get_result.dislikes}\n`
							ini_txt += `Comment : ${get_result.comments}\n\n`
							ini_txt += "*Link :* \n"
							link = get_result.link
							for (var x of link) {
								ini_txt += `${x.type} - ${x.link}\n\n`
							}
							thumbnail = await getBuffer(get_result.thumbnail)
							zero.sendMessage(from, thumbnail, image, { quoted: lol, caption: ini_txt })
							limitAdd(sender, limit)
						} else {
							reply(han.errs())
						}
					} catch (e) {
						console.log(e)
						reply(han.err())
					}
				} else {
					query = args.join(" ")
					try {
						get_result = await fetchJson(`http://api.lolhuman.xyz/api/xhamstersearch?apikey=${lol}&query=${query}`)
						if (get_result.status == '200') {
							get_result = get_result.result
							ini_txt = `Found : *${query}*`
							for (var x of get_result) {
								ini_txt += `\n\nTitle : ${x.title}\n`
								ini_txt += `Views : ${x.views}\n`
								ini_txt += `Duration : ${x.duration}\n`
								ini_txt += `Link : ${x.link}\n`
								ini_txt += `───────────────────`
							}
							reply(ini_txt)
							limitAdd(sender, limit)
						} else {
							reply(han.errs())
						}
					} catch (e) {
						console.log(e)
						reply(han.err())
					}
				}
				break
			case 'xnxx':
			case 'xnxxweb':
				if (!isGroup && !isPremium) return reply(han.groupp())
				if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(han.limitend(pushname))
				if (!isNsfw) return reply(han.nsfwoff())
				if (args.length < 1) return reply(`Just type query what u need :\nUsage : *${prefix + command} step mother*\n\nFor show info / download link :\nUsage : *${prefix + command} xnxx_url*`)
				if (q.includes('http://') || q.includes('https://')) {
					if (!q.includes('xnxx')) return reply('Url salah, gapernah main ke xnxx ya?')
					query = args.join(" ")
					try {
						get_result = await fetchJson(`https://api.lolhuman.xyz/api/xnxx?apikey=${lol}&url=${query}`)
						if (get_result.status == '200') {
							get_result = get_result.result
							ini_txt = `*${get_result.title}*\n\n`
							ini_txt += `Duration : ${get_result.duration}\n`
							ini_txt += `View : ${get_result.view}\n`
							ini_txt += `*Rating : ${get_result.rating}*\n\n`
							ini_txt += `Like : ${get_result.like}\n`
							ini_txt += `Dislike : ${get_result.dislike}\n`
							ini_txt += `Comment : ${get_result.comment}\n\n`
							try {
								ini_txt += `*Tags :* ${get_result.tag.join(", ")}\n\n`
							} catch {
								ini_txt += `*Tags :* ${get_result.tag}\n\n`
							}
							ini_txt += `*Description :*\n${get_result.description}\n\n`
							ini_txt += "*Link :* \n"
							link = get_result.link
							for (var x of link) {
								ini_txt += `${x.type} - ${x.link}\n\n`
							}
							thumbnail = await getBuffer(get_result.thumbnail)
							zero.sendMessage(from, thumbnail, image, { quoted: zer, caption: ini_txt })
							limitAdd(sender, limit)
						} else {
							reply(han.errs())
						}
					} catch (e) {
						console.log(e)
						reply(han.err())
					}
				} else {
					query = args.join(" ")
					try {
						get_result = await fetchJson(`http://api.lolhuman.xyz/api/xnxxsearch?apikey=${lol}&query=${query}`)
						if (get_result.status == '200') {
							get_result = get_result.result
							ini_txt = `Found : *${query}*`
							for (var x of get_result) {
								ini_txt += `\n\nTitle : *${x.title}*\n`
								ini_txt += `Views : ${x.views}\n`
								ini_txt += `Duration : ${x.duration}\n`
								ini_txt += `Uploader : ${x.uploader}\n`
								ini_txt += `Link : ${x.link}\n`
								ini_txt += `Thumbnail : ${x.thumbnail}\n`
								ini_txt += `───────────────────`
							}
							reply(ini_txt)
							limitAdd(sender, limit)
						} else {
							reply(han.errs())
						}
					} catch (e) {
						console.log(e)
						reply(han.err())
					}
				}
				break
			case 'pornhub':
			case 'pornhubweb':
				if (!isGroup && !isPremium) return reply(han.groupp())
				if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(han.limitend(pushname))
				if (!isNsfw) return reply(han.nsfwoff())
				if (args.length < 1) return reply(`Just type query what u need :\nUsage : *${prefix + command} step sister*\n\nFor show info / download link :\nUsage : *${prefix + command} pornhub_url*`)
				if (q.includes('http://') || q.includes('https://')) {
					if (!q.includes('pornhub')) return reply('Situs pornhub atau apa itu ngab?')
					query = args.join(" ")
					try {
						get_result = await fetchJson(`https://api.lolhuman.xyz/api/pornhub?apikey=${lol}&url=${query}`)
						if (get_result.status == '200') {
							get_result = get_result.result
							get_media = get_result.media
							ini_txt = `*${get_result.title}*\n\n`
							ini_txt += `Duration : ${get_result.duration}\n`
							ini_txt += `View : ${get_result.views}\n`
							ini_txt += `Geo : *${get_result.geo}*\n\n`
							ini_txt += `Like : ${get_result.like}\n`
							ini_txt += `Dislike : ${get_result.dislike}\n`
							ini_txt += `Upload : ${get_result.upload}\n\n`
							ini_txt += `*Link :* \n\n`
							for (var x of get_media) {
								ini_txt += `*Default Quality :* ${x.defaultQuality}\n`
								ini_txt += `*${x.quality} - ${x.format}*\n`
								ini_txt += `*Link :* ${x.videoUrl}\n`
								ini_txt += `───────────────────\n\n`
							}
							thumbnail = await getBuffer(get_result.thumb)
							zero.sendMessage(from, thumbnail, image, { quoted: zer, caption: ini_txt })
							limitAdd(sender, limit)
						} else {
							reply(han.errs())
						}
					} catch (e) {
						console.log(e)
						reply(han.err())
					}
				} else {
					query = args.join(" ")
					try {
						get_result = await fetchJson(`https://api.lolhuman.xyz/api/pornhubsearch?apikey=${lol}&query=${query}`)
						if (get_result.status == '200') {
							get_result = get_result.result
							ini_txt = `Found : *${query}*`
							for (var x of get_result) {
								ini_txt += `\n\nTitle : *${x.title}*\n`
								ini_txt += `Views : ${x.views}\n`
								ini_txt += `Duration : ${x.duration}\n`
								ini_txt += `Uploader : ${x.uploader}\n`
								ini_txt += `Views : ${x.views}\n`
								ini_txt += `Rating : ${x.rating}\n`
								ini_txt += `Link : ${x.link}\n`
								ini_txt += `Thumbnail : ${x.thumbnail}\n`
								ini_txt += `───────────────────`
							}
							reply(ini_txt)
							limitAdd(sender, limit)
						} else {
							reply(han.errs())
						}
					} catch (e) {
						console.log(e)
						reply(han.err())
					}
				}
				break
			case 'loli':
				if (!isGroup && !isPremium) return reply(han.groupp())
				if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(han.limitend(pushname))
				if (!isNsfw) return reply(han.nsfwoff())
				if (args.length != 0) return reply(han.noneed())
				zero.sendMessage(from,`*「 WAIT 」 DON'T SPAM*`, text)
				try {
					buffer = await getBuffer(`https://api.lolhuman.xyz/api/random/nsfw/loli?apikey=${lol}`)
					bba = await zero.prepareMessage(from, buffer, MessageType.image)
					buttons = [{buttonId:`${prefix + command}`,buttonText: {displayText: 'NEXT ▶'}, type: 1}]
					ButonsMerssages = {
						contentText: `_© Loli Ni~_`,
						buttons: buttons,
						footerText: `Klik Next Untuk Melanjutkan`,
						headerType: 4,
						imageMessage: bba.message.imageMessage
					}
					await zero.sendMessage(from, ButonsMerssages, MessageType.buttonsMessage, {quoted: zer})
					limitAdd(sender, limit)
				} catch (e) {
					console.log(e)
					reply(han.err())
				}
				break
			case 'loli2':
				if (!isGroup && !isPremium) return reply(han.groupp())
				if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(han.limitend(pushname))
				if (!isNsfw) return reply(han.nsfwoff())
				if (args.length != 0) return reply(han.noneed())
				zero.sendMessage(from,`*「 WAIT 」 DON'T SPAM*`, text)
				try {
					buffer = await getBuffer(`https://api.lolhuman.xyz/api/random/nsfw/chiisaihentai?apikey=${lol}`)
					bba = await zero.prepareMessage(from, buffer, MessageType.image)
					buttons = [{buttonId:`${prefix + command}`,buttonText: {displayText: 'NEXT ▶'}, type: 1}]
					ButonsMerssages = {
						contentText: `_© Loli Nii~_`,
						buttons: buttons,
						footerText: `Klik Next Untuk Melanjutkan`,
						headerType: 4,
						imageMessage: bba.message.imageMessage
					}
					await zero.sendMessage(from, ButonsMerssages, MessageType.buttonsMessage, {quoted: zer})
					limitAdd(sender, limit)
				} catch (e) {
					console.log(e)
					reply(han.err())
				}
				break
			case 'waifunsfw':
				if (!isGroup && !isPremium) return reply(han.groupp())
				if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(han.limitend(pushname))
				if (!isNsfw) return reply(han.nsfwoff())
				if (args.length != 0) return reply(han.noneed())
				zero.sendMessage(from,`*「 WAIT 」 DON'T SPAM*`, text)
				try {
					buffer = await getBuffer(`https://api.lolhuman.xyz/api/random/nsfw/waifu?apikey=${lol}`)
					bba = await zero.prepareMessage(from, buffer, MessageType.image)
					buttons = [{buttonId:`${prefix + command}`,buttonText: {displayText: 'NEXT ▶'}, type: 1}]
					ButonsMerssages = {
						contentText: `_© Waifu Yummy_`,
						buttons: buttons,
						footerText: `Klik Next Untuk Melanjutkan`,
						headerType: 4,
						imageMessage: bba.message.imageMessage
					}
					await zero.sendMessage(from, ButonsMerssages, MessageType.buttonsMessage, {quoted: zer})
					limitAdd(sender, limit)
				} catch (e) {
					console.log(e)
					reply(han.err())
				}
				break
			case 'waifunsfw2':
				if (!isGroup && !isPremium) return reply(han.groupp())
				if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(han.limitend(pushname))
				if (!isNsfw) return reply(han.nsfwoff())
				if (args.length != 0) return reply(han.noneed())
				zero.sendMessage(from,`*「 WAIT 」 DON'T SPAM*`, text)
				try {
					memein = await fetchJson(`https://api.waifu.pics/nsfw/waifu`)
					buffer = await getBuffer(memein.url)
					bba = await zero.prepareMessage(from, buffer, MessageType.image)
					buttons = [{buttonId:`${prefix + command}`,buttonText: {displayText: 'NEXT ▶'}, type: 1}]
					ButonsMerssages = {
						contentText: `_© Waifu Yummy <>_`,
						buttons: buttons,
						footerText: `Klik Next Untuk Melanjutkan`,
						headerType: 4,
						imageMessage: bba.message.imageMessage
					}
					await zero.sendMessage(from, ButonsMerssages, MessageType.buttonsMessage, {quoted: zer})
					limitAdd(sender, limit)
				} catch (e) {
					console.log(e)
					reply(han.err())
				}
				break
			case 'nekonsfw':
				if (!isGroup) {
					zero.sendMessage(from,`*「 WAIT 」 DON'T SPAM*`, text)
					try {
						buffer = await getBuffer(`https://api.lolhuman.xyz/api/random/nsfw/neko?apikey=${lol}`)
						bba = await zero.prepareMessage(from, buffer, MessageType.image)
						buttons = [{buttonId:`${prefix + command}`,buttonText: {displayText: 'NEXT ▶'}, type: 1}]
						ButonsMerssages = {
							contentText: `_© Neko + +_`,
							buttons: buttons,
							footerText: `Klik Next Untuk Melanjutkan`,
							headerType: 4,
							imageMessage: bba.message.imageMessage
						}
						await zero.sendMessage(from, ButonsMerssages, MessageType.buttonsMessage, {quoted: zer})
					} catch (e) {
						console.log(e)
						reply(han.err())
					}
				} else {
					if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(han.limitend(pushname))
					if (!isNsfw) return reply(han.nsfwoff())
					if (args.length != 0) return reply(han.noneed())
					zero.sendMessage(from,`*「 WAIT 」 DON'T SPAM*`, text)
					try {
						buffer = await getBuffer(`https://api.lolhuman.xyz/api/random/nsfw/neko?apikey=${lol}`)
						bba = await zero.prepareMessage(from, buffer, MessageType.image)
						buttons = [{buttonId:`${prefix + command}`,buttonText: {displayText: 'NEXT ▶'}, type: 1}]
						ButonsMerssages = {
							contentText: `_© Neko + +_`,
							buttons: buttons,
							footerText: `Klik Next Untuk Melanjutkan`,
							headerType: 4,
							imageMessage: bba.message.imageMessage
						}
						await zero.sendMessage(from, ButonsMerssages, MessageType.buttonsMessage, {quoted: zer})
						limitAdd(sender, limit)
					} catch (e) {
						console.log(e)
						reply(han.err())
					}
				}
				break
			case 'trap':
			case 'blowjob':
			case 'yaoi':
			case 'ecchi':
			case 'milf':
			case 'hentai':
			case 'ahegao':
			case 'hololewd':
			case 'sideoppai':
			case 'hentaiparadise':
			case 'hentaifemdom':
			case 'hentai4everyone':
				if (!isGroup && !isPremium) return reply(han.groupp())
				if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(han.limitend(pushname))
				if (!isNsfw) return reply(han.nsfwoff())
				if (args.length != 0) return reply(han.noneed())
				zero.sendMessage(from,`*「 WAIT 」 DON'T SPAM*`, text)
				try {
					buffer = await getBuffer(`https://api.lolhuman.xyz/api/random/nsfw/${command}?apikey=${lol}`)
					bba = await zero.prepareMessage(from, buffer, MessageType.image)
					buttons = [{buttonId:`${prefix + command}`,buttonText: {displayText: 'NEXT ▶'}, type: 1}]
					ButonsMerssages = {
						contentText: `_© ${NameBot}_`,
						buttons: buttons,
						footerText: `Klik Next Untuk Melanjutkan`,
						headerType: 4,
						imageMessage: bba.message.imageMessage
					}
					await zero.sendMessage(from, ButonsMerssages, MessageType.buttonsMessage, {quoted: zer})
					limitAdd(sender, limit)
				} catch (e) {
					console.log(e)
					reply(han.err())
				}
				break
			case 'bigtiddies':
				if (!isGroup && !isPremium) return reply(han.groupp())
				if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(han.limitend(pushname))
				if (!isNsfw) return reply(han.nsfwoff())
				if (args.length != 0) return reply(han.noneed())
				zero.sendMessage(from,`*「 WAIT 」 DON'T SPAM*`, text)
				try {
					buffer = await getBuffer(`https://api.lolhuman.xyz/api/random/nsfw/biganimetiddies?apikey=${lol}`)
					bba = await zero.prepareMessage(from, buffer, MessageType.image)
					buttons = [{buttonId:`${prefix + command}`,buttonText: {displayText: 'NEXT ▶'}, type: 1}]
					ButonsMerssages = {
						contentText: `_© BIG BOOBAH_`,
						buttons: buttons,
						footerText: `Klik Next Untuk Melanjutkan`,
						headerType: 4,
						imageMessage: bba.message.imageMessage
					}
					await zero.sendMessage(from, ButonsMerssages, MessageType.buttonsMessage, {quoted: zer})
					limitAdd(sender, limit)
				} catch (e) {
					console.log(e)
					reply(han.err())
				}
				break
			case 'feets':
			case 'booty':
			case 'thighss':
			case 'armpits':
				if (!isGroup && !isPremium) return reply(han.groupp())
				if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(han.limitend(pushname))
				if (!isNsfw) return reply(han.nsfwoff())
				if (args.length != 0) return reply(han.noneed())
				zero.sendMessage(from,`*「 WAIT 」 DON'T SPAM*`, text)
				try {
					buffer = await getBuffer(`https://api.lolhuman.xyz/api/random/nsfw/anime${command}?apikey=${lol}`)
					bba = await zero.prepareMessage(from, buffer, MessageType.image)
					buttons = [{buttonId:`${prefix + command}`,buttonText: {displayText: 'NEXT ▶'}, type: 1}]
					ButonsMerssages = {
						contentText: `_© ${NameBot}_`,
						buttons: buttons,
						footerText: `Klik Next Untuk Melanjutkan`,
						headerType: 4,
						imageMessage: bba.message.imageMessage
					}
					await zero.sendMessage(from, ButonsMerssages, MessageType.buttonsMessage, {quoted: zer})
					limitAdd(sender, limit)
				} catch (e) {
					console.log(e)
					reply(han.err())
				}
				break
			case 'trap2':
				if (!isGroup && !isPremium) return reply(han.groupp())
				if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(han.limitend(pushname))
				if (!isNsfw) return reply(han.nsfwoff())
				if (args.length != 0) return reply(han.noneed())
				zero.sendMessage(from,`*「 WAIT 」 DON'T SPAM*`, text)
				try {
					buffer = await getBuffer(`https://api.lolhuman.xyz/api/random2/trap?apikey=${lol}`)
					bba = await zero.prepareMessage(from, buffer, MessageType.image)
					buttons = [{buttonId:`${prefix + command}`,buttonText: {displayText: 'NEXT ▶'}, type: 1}]
					ButonsMerssages = {
						contentText: `_© Trap mu Mazz_`,
						buttons: buttons,
						footerText: `Klik Next Untuk Melanjutkan`,
						headerType: 4,
						imageMessage: bba.message.imageMessage
					}
					await zero.sendMessage(from, ButonsMerssages, MessageType.buttonsMessage, {quoted: zer})
					limitAdd(sender, limit)
				} catch (e) {
					console.log(e)
					reply(han.err())
				}
				break
			case 'blowjob2':
				if (!isGroup && !isPremium) return reply(han.groupp())
				if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(han.limitend(pushname))
				if (!isNsfw) return reply(han.nsfwoff())
				if (args.length != 0) return reply(han.noneed())
				zero.sendMessage(from,`*「 WAIT 」 DON'T SPAM*`, text)
				try {
					buffer = await getBuffer(`https://api.lolhuman.xyz/api/random2/blowjob?apikey=${lol}`)
					bba = await zero.prepareMessage(from, buffer, MessageType.image)
					buttons = [{buttonId:`${prefix + command}`,buttonText: {displayText: 'NEXT ▶'}, type: 1}]
					ButonsMerssages = {
						contentText: `_© Slebeww_`,
						buttons: buttons,
						footerText: `Klik Next Untuk Melanjutkan`,
						headerType: 4,
						imageMessage: bba.message.imageMessage
					}
					await zero.sendMessage(from, ButonsMerssages, MessageType.buttonsMessage, {quoted: zer})
					limitAdd(sender, limit)
				} catch (e) {
					console.log(e)
					reply(han.err())
				}
				break
			case 'hentai2':
				if (!isGroup && !isPremium) return reply(han.groupp())
				if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(han.limitend(pushname))
				if (!isNsfw) return reply(han.nsfwoff())
				if (args.length != 0) return reply(han.noneed())
				zero.sendMessage(from,`*「 WAIT 」 DON'T SPAM*`, text)
				try {
					buffer = await getBuffer(`https://api.lolhuman.xyz/api/random2/hentai?apikey=${lol}`)
					bba = await zero.prepareMessage(from, buffer, MessageType.image)
					buttons = [{buttonId:`${prefix + command}`,buttonText: {displayText: 'NEXT ▶'}, type: 1}]
					ButonsMerssages = {
						contentText: `_© Baka Hentai_`,
						buttons: buttons,
						footerText: `Klik Next Untuk Melanjutkan`,
						headerType: 4,
						imageMessage: bba.message.imageMessage
					}
					await zero.sendMessage(from, ButonsMerssages, MessageType.buttonsMessage, {quoted: zer})
					limitAdd(sender, limit)
				} catch (e) {
					console.log(e)
					reply(han.err())
				}
				break
			case 'hololewd2':
				if (!isGroup && !isPremium) return reply(han.groupp())
				if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(han.limitend(pushname))
				if (!isNsfw) return reply(han.nsfwoff())
				if (args.length != 0) return reply(han.noneed())
				zero.sendMessage(from,`*「 WAIT 」 DON'T SPAM*`, text)
				try {
					buffer = await getBuffer(`https://api.lolhuman.xyz/api/random2/hololewd?apikey=${lol}`)
					bba = await zero.prepareMessage(from, buffer, MessageType.image)
					buttons = [{buttonId:`${prefix + command}`,buttonText: {displayText: 'NEXT ▶'}, type: 1}]
					ButonsMerssages = {
						contentText: `_© HoloLewd`,
						buttons: buttons,
						footerText: `Klik Next Untuk Melanjutkan`,
						headerType: 4,
						imageMessage: bba.message.imageMessage
					}
					await zero.sendMessage(from, ButonsMerssages, MessageType.buttonsMessage, {quoted: zer})
					limitAdd(sender, limit)
				} catch (e) {
					console.log(e)
					reply(han.err())
				}
				break
			case 'bj':
			case 'ero':
			case 'cum':
			case 'les':
			case 'feet':
			case 'yuri':
			case 'lewd':
			case 'eron':
			case 'solo':
			case 'anal':
			case 'keta':
			case 'tits':
			case 'kuni':
			case 'erok':
			case 'solog':
			case 'feetg':
			case 'lewdk':
			case 'pussy':
			case 'femdom':
			case 'eroyuri':
			case 'erofeet':
			case 'holoero':
			case 'classic':
			case 'erokemo':
			case 'futanari':
			case 'lewdkemo':
				if (!isGroup && !isPremium) return reply(han.groupp())
				if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(han.limitend(pushname))
				if (!isNsfw) return reply(han.nsfwoff())
				if (args.length != 0) return reply(han.noneed())
				zero.sendMessage(from,`*「 WAIT 」 DON'T SPAM*`, text)
				try {
					buffer = await getBuffer(`https://api.lolhuman.xyz/api/random2/${command}?apikey=${lol}`)
					bba = await zero.prepareMessage(from, buffer, MessageType.image)
					buttons = [{buttonId:`${prefix + command}`,buttonText: {displayText: 'NEXT ▶'}, type: 1}]
					ButonsMerssages = {
						contentText: `_© ${NameBot}_`,
						buttons: buttons,
						footerText: `Klik Next Untuk Melanjutkan`,
						headerType: 4,
						imageMessage: bba.message.imageMessage
					}
					await zero.sendMessage(from, ButonsMerssages, MessageType.buttonsMessage, {quoted: zer})
					limitAdd(sender, limit)
				} catch (e) {
					console.log(e)
					reply(han.err())
				}
				break
			case 'nsfw_neko_gif':
			case 'random_hentai_gif':
				if (!isGroup && !isPremium) return reply(han.groupp())
				if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(han.limitend(pushname))
				if (args.length != 0) return reply(han.noneed())
				if (antrivideo.hasOwnProperty(nano.split('@')[0])) return reply("Seng Sabar.")
				nih = "SabarLah"
				antrivideo[nano.split('@')[0]] = nih.toLowerCase()
				fs.writeFileSync("./storage/antrivideo.json", JSON.stringify(antrivideo))
				try {
					zero.sendMessage(from,`*「 WAIT 」 DON'T SPAM*`, text)
					get_result2 = await fetchJson(`https://api.lolhuman.xyz/api/convert/webptomp4?apikey=${lol}&img=https://api.lolhuman.xyz/api/random2/${command}?apikey=${lol}`)
					ini_buffer = await getBuffer(get_result2.result)
					if (antrivideo.hasOwnProperty(nano.split('@')[0])) {
						sendButVideo(from,`━ ━ ━ ━ [ *${command}* ] ━ ━ ━ ━`.toUpperCase(),`_${NameBot}_`, ini_buffer, [{buttonId:`${prefix + command}`,buttonText: {displayText: 'NEXT ▶'}, type: 1}], {quoted:zer})
						limitAdd(sender, limit)
						delete antrivideo[nano.split('@')[0]]
						fs.writeFileSync("./storage/antrivideo.json", JSON.stringify(antrivideo))
					}
				} catch (e) {
					console.log(e)
					reply(han.err())
					delete antrivideo[nano.split('@')[0]]
					fs.writeFileSync("./storage/antrivideo.json", JSON.stringify(antrivideo))
				}
				break

				// Textprome //
			case 'neon':
			case 'greenneon':
			case 'futureneon':
			case 'sandwriting':
			case 'sandsummer':
			case 'sandengraved':
			case 'metaldark':
			case 'neonlight':
			case 'holographic':
			case 'text1917':
			case 'minion':
			case 'deluxesilver':
			case 'newyearcard':
			case 'bloodfrosted':
			case 'halloween':
			case 'jokerlogo':
			case 'fireworksparkle':
			case 'natureleaves':
			case 'bokeh':
			case 'toxic':
			case 'strawberry':
			case 'box3d':
			case 'roadwarning':
			case 'breakwall':
			case 'icecold':
			case 'luxury':
			case 'cloud':
			case 'summersand':
			case 'horrorblood':
			case 'thunder':
			case 'magma':
			case 'impressiveglitch':
			case 'harrypotter':
			case 'watercolor':
			case 'wonderfulgraffiti':
				if (!isGroup && !isPremium) return reply(han.groupp())
				if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(han.limitend(pushname))
				if (args.length == 0) return reply(`Example: ${prefix + command} Shiro Neko`)
				ini_txt = args.join(" ")
				thumbnail = fs.readFileSync(`./genshin/gagal.jpg`)
				try {
					zero.sendMessage(from,`*「 WAIT 」 DON'T SPAM*`, text)
					ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/textprome/${command}?apikey=${lol}&text=${ini_txt}`)
					try {
						await zero.sendMessage(from, ini_buffer, image, { quoted: zer })
						limitAdd(sender, limit)
					} catch {
						await zero.sendMessage(from, thumbnail, image, { quoted: zer })
					}
				} catch (e) {
					console.log(e)
					reply(han.err())
				}
				break
			case 'glitch':
			case 'avenger':
			case 'space':
			case 'ninjalogo':
			case 'marvelstudio':
			case 'lionlogo':
			case 'wolflogo':
			case 'steel3d':
			case 'wallgravity':
			case 'coolgravity':
				if (!isGroup && !isPremium) return reply(han.groupp())
				if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(han.limitend(pushname))
				if (args.length == 0 || !q.includes('|')) return reply(`Usage : ${prefix + command} text1|text2\n\nExample: *${prefix + command} Shiro|Neko*`)
				ini_nama = args.join(" ").split("|")
				txt1 = ini_nama[0].trim()
				txt2 = ini_nama[1].trim()
				if (txt1.length == 0) return reply('text1 cannot be empty')
				if (txt2.length == 0) return reply('text2 cannot be empty')
				thumbnail = fs.readFileSync(`./genshin/gagal.jpg`)
				try {
					zero.sendMessage(from,`*「 WAIT 」 DON'T SPAM*`, text)
					ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/textprome2/${command}?apikey=${lol}&text1=${txt1}&text2=${txt2}`)
					try {
						await zero.sendMessage(from, ini_buffer, image, { quoted: zer })
						limitAdd(sender, limit)
					} catch {
						await zero.sendMessage(from, thumbnail, image, { quoted: zer })
					}
				} catch (e) {
					console.log(e)
					reply(han.err())
				}
				break
			case 'phub':
				if (!isGroup && !isPremium) return reply(han.groupp())
				if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(han.limitend(pushname))
				if (args.length == 0 || !q.includes('|')) return reply(`Usage : ${prefix + command} text1|text2\n\nExample: *${prefix + command} Shiro|Neko*`)
				ini_nama = args.join(" ").split("|")
				txt1 = ini_nama[0].trim()
				txt2 = ini_nama[1].trim()
				if (txt1.length == 0) return reply('text1 cannot be empty')
				if (txt2.length == 0) return reply('text2 cannot be empty')
				thumbnail = fs.readFileSync(`./genshin/gagal.jpg`)
				try {
					zero.sendMessage(from,`*「 WAIT 」 DON'T SPAM*`, text)
					ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/textprome2/pornhub?apikey=${lol}&text1=${txt1}&text2=${txt2}`)
					try {
						await zero.sendMessage(from, ini_buffer, image, { quoted: zer })
						limitAdd(sender, limit)
					} catch {
						await zero.sendMessage(from, thumbnail, image, { quoted: zer })
					}
				} catch (e) {
					console.log(e)
					reply(han.err())
				}
				break
			case 'bpink':
				if (!isGroup && !isPremium) return reply(han.groupp())
				if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(han.limitend(pushname))
				if (args.length == 0) return reply(`Example: ${prefix + command} Shiro Neko`)
				ini_txt = args.join(" ")
				thumbnail = fs.readFileSync(`./genshin/gagal.jpg`)
				try {
					zero.sendMessage(from,`*「 WAIT 」 DON'T SPAM*`, text)
					ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/textprome/blackpink?apikey=${lol}&text=${ini_txt}`)
					try {
						await zero.sendMessage(from, ini_buffer, image, { quoted: zer })
						limitAdd(sender, limit)
					} catch {
						await zero.sendMessage(from, thumbnail, image, { quoted: zer })
					}
				} catch (e) {
					console.log(e)
					reply(han.err())
				}
				break

				// Photo Oxy //
			case 'shadow':
			case 'cup':
			case 'cup1':
			case 'romance':
			case 'smoke':
			case 'burnpaper':
			case 'lovemessage':
			case 'undergrass':
			case 'love':
			case 'coffe':
			case 'woodheart':
			case 'woodenboard':
			case 'summer3d':
			case 'wolfmetal':
			case 'nature3d':
			case 'underwater':
			case 'golderrose':
			case 'summernature':
			case 'fallleaves':
			case 'flamming':
			case 'harrypotter':
			case 'carvedwood':
				if (!isGroup && !isPremium) return reply(han.groupp())
				if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(han.limitend(pushname))
				if (args.length == 0) return reply(`Example: ${prefix + command} Shiro Neko`)
				ini_txt = args.join(" ")
				thumbnail = fs.readFileSync(`./genshin/gagal.jpg`)
				try {
					zero.sendMessage(from,`*「 WAIT 」 DON'T SPAM*`, text)
					ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/photooxy1/${command}?apikey=${lol}&text=${ini_txt}`)
					try {
						await zero.sendMessage(from, ini_buffer, image, { quoted: zer })
						limitAdd(sender, limit)
					} catch {
						await zero.sendMessage(from, thumbnail, image, { quoted: zer })
					}
				} catch (e) {
					console.log(e)
					reply(han.err())
				}
				break
			case 'arcade8bit':
			case 'battlefield4':
			case 'pubg':
				if (!isGroup && !isPremium) return reply(han.groupp())
				if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(han.limitend(pushname))
				if (args.length == 0 || !q.includes('|')) return reply(`Usage : ${prefix + command} text1|text2\n\nExample: *${prefix + command} Shiro|Neko*`)
				ini_nama = args.join(" ").split("|")
				txt1 = ini_nama[0].trim()
				txt2 = ini_nama[1].trim()
				if (txt1.length == 0) return reply('text1 cannot be empty')
				if (txt2.length == 0) return reply('text2 cannot be empty')
				thumbnail = fs.readFileSync(`./genshin/gagal.jpg`)
				try {
					zero.sendMessage(from,`*「 WAIT 」 DON'T SPAM*`, text)
					ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/photooxy2/${command}?apikey=${lol}&text1=${txt1}&text2=${txt2}`)
					try {
						await zero.sendMessage(from, ini_buffer, image, { quoted: zer })
						limitAdd(sender, limit)
					} catch {
						await zero.sendMessage(from, thumbnail, image, { quoted: zer })
					}
				} catch (e) {
					console.log(e)
					reply(han.err())
				}
				break
			case 'tiktok':
			case 'tiktokwm':
				if (!isGroup && !isPremium) return reply(han.groupp())
				if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(han.limitend(pushname))
				if (args.length == 0) return reply(`For making text from PhotoOxy :\nUsage : *${prefix + command} text1|text2*\n\nFor download tiktok video :\nUsage : *${prefix + command} tiktok_url*`)
				if (q.includes('http') && !q.includes('|')) {
					if (antrivideo.hasOwnProperty(nano.split('@')[0])) return reply("Sabar bang, antri")
					nih = "SabarLah"
					antrivideo[nano.split('@')[0]] = nih.toLowerCase()
					fs.writeFileSync("./storage/antrivideo.json", JSON.stringify(antrivideo))
					try {
						zero.sendMessage(from,`*「 WAIT 」 DON'T SPAM*`, text)
						get_buffer = await getBuffer(`https://api.lolhuman.xyz/api/tiktokwm?apikey=${lol}&url=${q}`)
						await zero.sendMessage(from, get_buffer, video, { quoted: zer, caption: `TIKTOK WITH WATERMARK` })
						delete antrivideo[nano.split('@')[0]]
						fs.writeFileSync("./storage/antrivideo.json", JSON.stringify(antrivideo))
					} catch (e) {
						console.log(e)
						reply(`Invalid tiktok url / fitur error.\nAtau coba gunakan *${prefix}tiktoknowm*`)
						delete antrivideo[nano.split('@')[0]]
						fs.writeFileSync("./storage/antrivideo.json", JSON.stringify(antrivideo))
					}
				} else if (q.includes('|')) {
					ini_nama = args.join(" ").split("|")
					txt1 = ini_nama[0].trim()
					txt2 = ini_nama[1].trim()
					if (txt1.length == 0) return reply('Teks pertama tidak boleh kosong')
					if (txt2.length == 0) return reply('Teks kedua tidak boleh kosong')
					thumbnail = fs.readFileSync(`./genshin/gagal.jpg`)
					try {
						zero.sendMessage(from,`*「 WAIT 」 DON'T SPAM*`, text)
						ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/photooxy2/tiktok?apikey=${lol}&text1=${txt1}&text2=${txt2}`)
						try {
							await zero.sendMessage(from, ini_buffer, image, { quoted: zer })
							limitAdd(sender, limit)
						} catch {
							await zero.sendMessage(from, thumbnail, image, { quoted: zer })
						}
					} catch (e) {
						console.log(e)
						reply(han.err())
					}	
				} else {
					return reply(`For making text from PhotoOxy :\nUsage : *${prefix + command} text1|text2*\n\nFor download tiktok video :\nUsage : *${prefix + command} tiktok_url*`)
				}
				break

				// Ephoto 360 //
			case 'wetglass':
			case 'multicolor3d':
			case 'watercolor':
			case 'luxurygold':
			case 'galaxywallpaper':
			case 'lighttext':
			case 'beautifulflower':
			case 'puppycute':
			case 'royaltext':
			case 'heartshaped':
			case 'birthdaycake':
			case 'galaxystyle':
			case 'hologram3d':
			case 'greenneon':
			case 'glossychrome':
			case 'greenbush':
			case 'metallogo':
			case 'noeltext':
			case 'glittergold':
			case 'textcake':
			case 'starsnight':
			case 'wooden3d':
			case 'textbyname':
			case 'writegalacy':
			case 'galaxybat':
			case 'snow3d':
			case 'birthdayday':
			case 'goldplaybutton':
			case 'silverplaybutton':
			case 'freefire':
			case 'cartoongravity':
			case 'anonymhacker':
			case 'mlwall':
			case 'pubgmaskot':
			case 'aovwall':
			case 'logogaming':
			case 'fpslogo':
			case 'avatarlolnew':
			case 'lolbanner':
			case 'avatardota':
				if (!isGroup && !isPremium) return reply(han.groupp())
				if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(han.limitend(pushname))
				if (args.length == 0) return reply(`Example: ${prefix + command} Shiro Neko`)
				ini_txt = args.join(" ")
				thumbnail = fs.readFileSync(`./genshin/gagal.jpg`)
				try {
					zero.sendMessage(from,`*「 WAIT 」 DON'T SPAM*`, text)
					ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/ephoto1/${command}?apikey=${lol}&text=${ini_txt}`)
					try {
						await zero.sendMessage(from, ini_buffer, image, { quoted: zer })
						limitAdd(sender, limit)
					} catch {
						await zero.sendMessage(from, thumbnail, image, { quoted: zer })
					}
				} catch (e) {
					console.log(e)
					reply(han.err())
				}
				break
			case 'juventusshirt':
			case 'cutegravity':
			case 'realvintage':
			case 'codwarzone':
				if (!isGroup && !isPremium) return reply(han.groupp())
				if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(han.limitend(pushname))
				if (args.length == 0 || !q.includes('|')) return reply(`Usage : ${prefix + command} text1|text2\n\nExample: *${prefix + command} Shiro|Neko*`)
				ini_nama = args.join(" ").split("|")
				txt1 = ini_nama[0].trim()
				txt2 = ini_nama[1].trim()
				if (txt1.length == 0) return reply('text1 cannot be empty')
				if (txt2.length == 0) return reply('text2 cannot be empty')
				thumbnail = fs.readFileSync(`./genshin/gagal.jpg`)
				try {
					zero.sendMessage(from,`*「 WAIT 」 DON'T SPAM*`, text)
					ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/ephoto2/${command}?apikey=${lol}&text1=${txt1}&text2=${txt2}`)
					try {
						await zero.sendMessage(from, ini_buffer, image, { quoted: zer })
						limitAdd(sender, limit)
					} catch {
						await zero.sendMessage(from, thumbnail, image, { quoted: zer })
					}
				} catch (e) {
					console.log(e)
					reply(han.err())
				}
				break
			case 'valorantbanner':
				if (!isGroup && !isPremium) return reply(han.groupp())
				if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(han.limitend(pushname))
				if (args.length == 0 || !q.includes('|')) return reply(`Usage : ${prefix + command} text1|text2|text3\n\nExample: *${prefix + command} Shiro|Neko|Kuro*`)
				ini_nama = args.join(" ").split("|")
				txt1 = ini_nama[0].trim()
				txt2 = ini_nama[1].trim()
				txt3 = ini_nama[2].trim()
				if (txt1.length == 0) return reply('text1 cannot be empty')
				if (txt2.length == 0) return reply('text2 cannot be empty')
				if (txt3.length == 0) return reply('text3 cannot be empty')
				thumbnail = fs.readFileSync(`./genshin/gagal.jpg`)
				try {
					zero.sendMessage(from,`*「 WAIT 」 DON'T SPAM*`, text)
					ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/ephoto3/${command}?apikey=${lol}&text1=${txt1}&text2=${txt2}&text3=${txt3}`)
					try {
						await zero.sendMessage(from, ini_buffer, image, { quoted: zer })
						limitAdd(sender, limit)
					} catch {
						await zero.sendMessage(from, thumbnail, image, { quoted: zer })
					}
				} catch (e) {
					console.log(e)
					reply(han.err())
				}
				break


			// EDITOR MENU //
			case 'triggered':
			case 'trigger':
				if (!isGroup && !isPremium) return reply(han.groupp())
				if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(han.limitend(pushname))
				if (args.length != 0) return reply(han.noneed())
				if (antrivideo.hasOwnProperty(nano.split('@')[0])) return reply("Seng Sabar.")
				nih = "SabarLah"
				antrivideo[nano.split('@')[0]] = nih.toLowerCase()
				fs.writeFileSync("./storage/antrivideo.json", JSON.stringify(antrivideo))
				var imgbb = require('imgbb-uploader')
				if ((isMedia && !zer.message.videoMessage || isQuotedImage) && args.length == 0) {
					ted = isQuotedImage ? JSON.parse(JSON.stringify(zer).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: zer
					owgi = await zero.downloadAndSaveMediaMessage(ted)
					anu = await imgbb("7b2fde1f55b9a594d5db403f0a0c2712", owgi)
					try {
						ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/editor/triggered?apikey=${lol}&img=${anu.display_url}`)
						zero.sendMessage(from,`*「 WAIT 」 DON'T SPAM*`, text)
						if (antrivideo.hasOwnProperty(nano.split('@')[0])) {
							await zero.sendMessage(from, ini_buffer, video, { quoted: zer })
							limitAdd(sender, limit)
							delete antrivideo[nano.split('@')[0]]
							fs.writeFileSync("./storage/antrivideo.json", JSON.stringify(antrivideo))
						}
					} catch (e) {
						console.log(e)
						reply(han.err())
						delete antrivideo[nano.split('@')[0]]
						fs.writeFileSync("./storage/antrivideo.json", JSON.stringify(antrivideo))
					}
				} else {
					reply(`Kirim gambar dengan caption *${prefix + command}* atau tag gambar yang sudah dikirim`)
					delete antrivideo[nano.split('@')[0]]
					fs.writeFileSync("./storage/antrivideo.json", JSON.stringify(antrivideo))
				}
				break
			case 'triggered2':
			case 'trigger2':
				if (!isGroup && !isPremium) return reply(han.groupp())
				if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(han.limitend(pushname))
				if (args.length != 0) return reply(han.noneed())
				var imgbb = require('imgbb-uploader')
				if ((isMedia && !zer.message.videoMessage || isQuotedImage) && args.length == 0) {
					ted = isQuotedImage ? JSON.parse(JSON.stringify(zer).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: zer
					owgi = await zero.downloadAndSaveMediaMessage(ted)
					anu = await imgbb("7b2fde1f55b9a594d5db403f0a0c2712", owgi)
					try {
						zero.sendMessage(from,`*「 WAIT 」 DON'T SPAM*`, text)
						hehe = await getBuffer(`https://some-random-api.ml/canvas/triggered?avatar=${anu.display_url}`)
						fs.writeFileSync('./media/sticker/trigger.webp', hehe)
						exec(`webpmux -set exif ./media/sticker/data.exif ./media/sticker/trigger.webp -o ./media/sticker/trigger.webp`, async (error) => {
							if (error) return reply(han.errs())
							zero.sendMessage(from, fs.readFileSync(`./media/sticker/trigger.webp`), sticker, {quoted: zer})
							fs.unlinkSync(`./media/sticker/trigger.webp`)	
						})
						limitAdd(sender, limit)
					} catch (e) {
						reply(han.err())
						console.log(e)
					}
				} else {
					reply(`Kirim gambar dengan caption *${prefix + command}* atau tag gambar yang sudah dikirim`)
				}
				break
			/*case 'triggered2':
			case 'trigger2':
				ini_url = args[0]
				ranp = getRandom('.gif')
				rano = getRandom('.webp')
				var imgbb = require('imgbb-uploader')
				ted = isQuotedImage ? JSON.parse(JSON.stringify(zer).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: zer
				owgi = await zero.downloadAndSaveMediaMessage(ted)
				anu = await imgbb("7b2fde1f55b9a594d5db403f0a0c2712", owgi)
				ini_buffer = `https://api.lolhuman.xyz/api/editor/triggered?apikey=${lol}&img=${anu.display_url}`
				exec(`wget "${ini_buffer}" -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					buff = fs.readFileSync(rano)
					zero.sendMessage(from, buff, sticker, { quoted: zer }).then(() => {
						fs.unlinkSync(rano)
					})
				})
				break*/
			case 'tosmile':
			case 'pencil':
			case 'wasted':
			case 'fisheye':
			case 'skullmask':
			case 'cartoon':
			case 'alien':
			case 'invert':
			case 'pixelate':
			case 'deepfry':
			case 'imagecolor':
			case 'rotate':
			case 'flip':
			case 'grayscale':
			case 'roundimage':
				if (!isGroup && !isPremium) return reply(han.groupp())
				if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(han.limitend(pushname))
				if (args.length != 0) return reply(han.noneed())
				var imgbb = require('imgbb-uploader')
				if ((isMedia && !zer.message.videoMessage || isQuotedImage) && args.length == 0) {
					ted = isQuotedImage ? JSON.parse(JSON.stringify(zer).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: zer
					owgi = await zero.downloadAndSaveMediaMessage(ted)
					anu = await imgbb("7b2fde1f55b9a594d5db403f0a0c2712", owgi)
					try {
						zero.sendMessage(from,`*「 WAIT 」 DON'T SPAM*`, text)
						hehe = await getBuffer(`https://api.lolhuman.xyz/api/editor/${command}?apikey=${lol}&img=${anu.display_url}`)
						zero.sendMessage(from, hehe, image, {quoted: zer})
						limitAdd(sender, limit)
					} catch (e) {
						reply(han.err())
						console.log(e)
					}
				} else {
					reply(`Kirim gambar dengan caption *${prefix + command}* atau tag gambar yang sudah dikirim`)
				}
				break
			case 'affect':
			case 'beautiful':
			case 'facepalm':
			case 'hitler':
			case 'jail':
			case 'rainbow':
			case 'rip':
			case 'sepia':
			case 'trash':
			case 'wanted':
				if (!isGroup && !isPremium) return reply(han.groupp())
				if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(han.limitend(pushname))
				if (args.length != 0) return reply(han.noneed())
				var imgbb = require('imgbb-uploader')
				if ((isMedia && !zer.message.videoMessage || isQuotedImage) && args.length == 0) {
					ted = isQuotedImage ? JSON.parse(JSON.stringify(zer).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: zer
					owgi = await zero.downloadAndSaveMediaMessage(ted)
					anu = await imgbb("7b2fde1f55b9a594d5db403f0a0c2712", owgi)
					try {
						zero.sendMessage(from,`*「 WAIT 」 DON'T SPAM*`, text)
						hehe = await getBuffer(`https://api.lolhuman.xyz/api/creator1/${command}?apikey=${lol}&img=${anu.display_url}`)
						zero.sendMessage(from, hehe, image, {quoted: zer})
						limitAdd(sender, limit)
					} catch (e) {
						reply(han.err())
						console.log(e)
					}
				} else {
					reply(`Kirim gambar dengan caption *${prefix + command}* atau tag gambar yang sudah dikirim`)
				}
				break

			// DOWNLOADER MENU //
			case 'play':
			case 'ytplay':
			case 'ytdl':
			case 'yt':
				//if (!isPremium) return reply(han.pre())
				if (args.length < 1) return reply(`Usage :\n*${prefix + command} query*\nor\n*${prefix + command} youtube_url*`)
				if (q.includes('http://') || q.includes('https://')) {
					try {
						get_result = await fetchJson(`https://api.lolhuman.xyz/api/ytvideo?apikey=${lol}&url=${q}`)
						if (get_result.status == '200') {
							get_result = get_result.result
							ini_txt = `id : ${get_result.id}\n\n`
							ini_txt += `*Title : ${get_result.title}*\n`
							ini_txt += `Uploader : ${get_result.uploader}\n`
							ini_txt += `Channel : ${get_result.channel}\n`
							ini_txt += `Duration : ${get_result.duration}\n\n`
							ini_txt += `View : *${get_result.view}*\n`
							ini_txt += `Like : *${get_result.like}*   Dislike : *${get_result.dislike}*\n\n`
							ini_txt += `*SILAHKAN PILIH TIPE DOWNLOAD*\n_(${prefix}ytaudio atau ${prefix}ytvideo bila tombol tidak berfungsi.)_`
							but = [{ buttonId: `ytaudio ${q}`, buttonText: { displayText: 'AUDIO' }, type: 1 },{ buttonId: `ytvideo ${q}`, buttonText: { displayText: 'VIDEO' }, type: 1 }]
							sendButYtdl(from, ini_txt, faketeks, fakeimg, but)
						} else {
							reply(`Invalid youtube url / fitur error.\nCoba gunakan *${prefix + command}2*`)
						}
					} catch (e) {
						console.log(e)
						reply(han.err())
					}
				} else {
					try {
						get_result = await fetchJson(`https://api.lolhuman.xyz/api/ytplay?apikey=${lol}&query=${q}`)
						if (get_result.status == '200') {
							get_result = get_result.result
							ini_txt = `id : ${get_result.info.id}\n\n`
							ini_txt += `*Title : ${get_result.info.title}*\n`
							ini_txt += `Uploader : ${get_result.info.uploader}\n`
							ini_txt += `Channel : ${get_result.info.channel}\n`
							ini_txt += `Duration : ${get_result.info.duration}\n\n`
							ini_txt += `View : *${get_result.info.view}*\n`
							ini_txt += `Like : *${get_result.info.like}*   Dislike : *${get_result.info.dislike}*\n\n`
							ini_txt += `*SILAHKAN PILIH TIPE DOWNLOAD*\n_(${prefix}playaudio atau ${prefix}playvideo bila tombol tidak berfungsi.)_`
							but = [{ buttonId: `ytaudio ${q}`, buttonText: { displayText: 'AUDIO' }, type: 1 },{ buttonId: `ytvideo ${q}`, buttonText: { displayText: 'VIDEO' }, type: 1 }]
							sendButYtPlay(from, ini_txt, faketeks, fakeimg, but)
						} else {
							reply(`Tidak ada hasil / fitur error.\nCoba gunakan *${prefix + command}2*`)
						}
					} catch (e) {
						console.log(e)
						reply(han.err())
					}
				}
				break
			case 'play2':
			case 'ytplay2':
			case 'ytdl2':
			case 'yt2':
				//if (!isPremium) return reply(han.pre())
				if (args.length < 1) return reply(`Usage :\n*${prefix + command} query*\nor\n*${prefix + command} youtube_url*`)
				if (q.includes('http://') || q.includes('https://')) {
					try {
						get_result = await fetchJson(`https://api.lolhuman.xyz/api/ytvideo2?apikey=${lol}&url=${q}`)
						if (get_result.status == '200') {
							get_result = get_result.result
							ini_txt = `*Title : ${get_result.title}*\n\n`
							ini_txt += `Size : ${get_result.size}\n\n`
							ini_txt += `*SILAHKAN PILIH TIPE DOWNLOAD*\n_(${prefix}ytaudio2 atau ${prefix}ytvideo2 bila tombol tidak berfungsi.)_`
							but = [{ buttonId: `ytaudio2 ${q}`, buttonText: { displayText: 'AUDIO' }, type: 1 },{ buttonId: `ytvideo2 ${q}`, buttonText: { displayText: 'VIDEO' }, type: 1 }]
							sendButYtdl(from, ini_txt, faketeks, fakeimg, but)
						} else {
							reply(`Invalid youtube url / fitur error.\nCoba gunakan *${prefix + command.replace("2", "")}*`)
						}
					} catch (e) {
						console.log(e)
						reply(han.err())
					}
				} else {
					try {
						get_result = await fetchJson(`https://api.lolhuman.xyz/api/ytplay2?apikey=${lol}&query=${q}`)
						if (get_result.status == '200') {
							get_result = get_result.result
							ini_txt = `*Title : ${get_result.title}*\n\n`
							ini_txt += `*SILAHKAN PILIH TIPE DOWNLOAD*\n_(${prefix}playaudio2 atau ${prefix}playvideo2 bila tombol tidak berfungsi.)_`
							but = [{ buttonId: `playaudio2 ${q}`, buttonText: { displayText: 'AUDIO' }, type: 1 },{ buttonId: `playvideo2 ${q}`, buttonText: { displayText: 'VIDEO' }, type: 1 }]
							sendButYtdl(from, ini_txt, faketeks, fakeimg, but)
						} else {
							reply(`Tidak ada hasil / fitur error.\nCoba gunakan *${prefix + command.replace("2", "")}*`)
						}
					} catch (e) {
						console.log(e)
						reply(han.err())
					}
				}
				break
			case 'ytsearch':
			case 'searchyt':
				if (!isGroup && !isPremium) return reply(han.groupp())
				if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(han.limitend(pushname))
				if (args.length == 0) return reply(`Example: ${prefix + command} Sia Unstopable`)
				query = args.join(" ")
				try {
					get_result = await fetchJson(`https://api.lolhuman.xyz/api/ytsearch?apikey=${lol}&query=${query}`)
					if (get_result.status == '200') {
						get_result = get_result.result
						ini_txt = `Found : *${query}*`
						for (var x of get_result) {
							ini_txt += `\n\n*Title :* ${x.title}\n`
							ini_txt += `*Link :* https://www.youtube.com/watch?v=${x.videoId}\n`
							ini_txt += `*Published :* ${x.published}\n`
							ini_txt += `*Views :* ${x.views}\n`
							ini_txt += `───────────────────`
						}
						ini_buffer = await getBuffer(get_result[0].thumbnail)
						await zero.sendMessage(from, ini_buffer, image, { quoted: zer, caption: ini_txt })
					} else {
						reply('Tidak ada hasil / fitur error.')
					}
				} catch (e) {
					console.log(e)
					reply(han.err())
				}
				break
			case 'ytaudio':
			case 'ytmp3':
			case 'playaudio':
			case 'playmp3':
				if (!isGroup && !isPremium) return reply(han.groupp())
				if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(han.limitend(pushname))
				//if (!isPremium) return reply(han.pre())
				if (antriaudio.hasOwnProperty(nano.split('@')[0])) return reply("Sabar bang, antri")
				if (args.length < 1) return reply(`Usage :\n*${prefix + command} query*\nor\n*${prefix + command} youtube_url*`)
				nih = "SabarLah"
				antriaudio[nano.split('@')[0]] = nih.toLowerCase()
				fs.writeFileSync("./storage/antriaudio.json", JSON.stringify(antriaudio))
				if (q.includes('http://') || q.includes('https://')) {
					try {
						get_result = await fetchJson(`https://api.lolhuman.xyz/api/ytaudio?apikey=${lol}&url=${q}`)
						if (get_result.status == '200') {
							get_result = get_result.result
							ini_size = get_result.link.size
							zero.sendMessage(from,`*「 ${prefix + command} 」* DON'T SPAM\n\n_sending file :_ *${ini_size}*`, text)
							ini_voice = await getBuffer(get_result.link.link)
							await zero.sendMessage(from, ini_voice, audio, { quoted: zer, mimetype: Mimetype.mp4Audio })
							limitAdd(sender, limit)
							delete antriaudio[nano.split('@')[0]]
							fs.writeFileSync("./storage/antriaudio.json", JSON.stringify(antriaudio))
						} else {
							reply(`Invalid youtube url / fitur error.\nCoba gunakan *${prefix + command}2*`)
							delete antriaudio[nano.split('@')[0]]
							fs.writeFileSync("./storage/antriaudio.json", JSON.stringify(antriaudio))
						}
					} catch (e) {
						console.log(e)
						reply(han.err())
						delete antriaudio[nano.split('@')[0]]
						fs.writeFileSync("./storage/antriaudio.json", JSON.stringify(antriaudio))
					}
				} else {
					try {
						get_result = await fetchJson(`https://api.lolhuman.xyz/api/ytplay?apikey=${lol}&query=${q}`)
						if (get_result.status == '200') {
							get_result = get_result.result
							ini_size = get_result.audio.size
							ini_bitrate = get_result.audio.bitrate
							zero.sendMessage(from,`*「 ${prefix + command} 」* DON'T SPAM\n\n_sending file :_ *${ini_size} ${ini_bitrate} kbps*`, text)
							ini_voice = await getBuffer(get_result.audio.link)
							await zero.sendMessage(from, ini_voice, audio, { quoted: zer, mimetype: Mimetype.mp4Audio })
							limitAdd(sender, limit)
							delete antriaudio[nano.split('@')[0]]
							fs.writeFileSync("./storage/antriaudio.json", JSON.stringify(antriaudio))
						} else {
							reply(`Tidak ada hasil / fitur error.\nCoba gunakan *${prefix + command}2*`)
							delete antriaudio[nano.split('@')[0]]
							fs.writeFileSync("./storage/antriaudio.json", JSON.stringify(antriaudio))
						}
					} catch (e) {
						console.log(e)
						reply(han.err())
						delete antriaudio[nano.split('@')[0]]
						fs.writeFileSync("./storage/antriaudio.json", JSON.stringify(antriaudio))
					}
				}
				break
			case 'ytaudio2':
			case 'ytmp32':
			case 'playaudio2':
			case 'playmp32':
				if (!isGroup && !isPremium) return reply(han.groupp())
				if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(han.limitend(pushname))
				//if (!isPremium) return reply(han.pre())
				if (antriaudio.hasOwnProperty(nano.split('@')[0])) return reply("Sabar bang, antri")
				if (args.length < 1) return reply(`Usage :\n*${prefix + command} query*\nor\n*${prefix + command} youtube_url*`)
				nih = "SabarLah"
				antriaudio[nano.split('@')[0]] = nih.toLowerCase()
				fs.writeFileSync("./storage/antriaudio.json", JSON.stringify(antriaudio))
				if (q.includes('http://') || q.includes('https://')) {
					try {
						get_result = await fetchJson(`https://api.lolhuman.xyz/api/ytaudio2?apikey=${lol}&url=${q}`)
						if (get_result.status == '200') {
							get_result = get_result.result
							ini_size = get_result.size
							zero.sendMessage(from,`*「 ${prefix + command} 」* DON'T SPAM\n\n_sending file :_ *${ini_size}*`, text)
							ini_voice = await getBuffer(get_result.link)
							await zero.sendMessage(from, ini_voice, audio, { quoted: zer, mimetype: Mimetype.mp4Audio })
							limitAdd(sender, limit)
							delete antriaudio[nano.split('@')[0]]
							fs.writeFileSync("./storage/antriaudio.json", JSON.stringify(antriaudio))
						} else {
							reply(`Invalid youtube url / fitur error.\nCoba gunakan *${prefix + command.replace("2", "")}*`)
							delete antriaudio[nano.split('@')[0]]
							fs.writeFileSync("./storage/antriaudio.json", JSON.stringify(antriaudio))
						}
					} catch (e) {
						console.log(e)
						reply(han.err())
						delete antriaudio[nano.split('@')[0]]
						fs.writeFileSync("./storage/antriaudio.json", JSON.stringify(antriaudio))
					}
				} else {
					try {
						get_result = await fetchJson(`https://api.lolhuman.xyz/api/ytplay2?apikey=${lol}&query=${q}`)
						if (get_result.status == '200') {
							get_result = get_result.result
							zero.sendMessage(from,`*「 ${prefix + command} 」* DON'T SPAM`, text)
							ini_voice = await getBuffer(get_result.audio)
							await zero.sendMessage(from, ini_voice, audio, { quoted: zer, mimetype: Mimetype.mp4Audio })
							limitAdd(sender, limit)
							delete antriaudio[nano.split('@')[0]]
							fs.writeFileSync("./storage/antriaudio.json", JSON.stringify(antriaudio))
						} else {
							reply(`Tidak ada hasil / fitur error.\nCoba gunakan *${prefix + command.replace("2", "")}*`)
							delete antriaudio[nano.split('@')[0]]
							fs.writeFileSync("./storage/antriaudio.json", JSON.stringify(antriaudio))
						}
					} catch (e) {
						console.log(e)
						reply(han.err())
						delete antriaudio[nano.split('@')[0]]
						fs.writeFileSync("./storage/antriaudio.json", JSON.stringify(antriaudio))
					}
				}
				break
			case 'ytvideo':
			case 'ytmp4':
			case 'playvideo':
			case 'playmp4':
				if (!isGroup && !isPremium) return reply(han.groupp())
				if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(han.limitend(pushname))
				//if (!isPremium) return reply(han.pre())
				if (antrivideo.hasOwnProperty(nano.split('@')[0])) return reply("Sabar bang, antri")
				if (args.length < 1) return reply(`Usage :\n*${prefix + command} query*\nor\n*${prefix + command} youtube_url*`)
				nih = "SabarLah"
				antrivideo[nano.split('@')[0]] = nih.toLowerCase()
				fs.writeFileSync("./storage/antrivideo.json", JSON.stringify(antrivideo))
				if (q.includes('http://') || q.includes('https://')) {
					try {
						get_result = await fetchJson(`https://api.lolhuman.xyz/api/ytvideo?apikey=${lol}&url=${q}`)
						if (get_result.status == '200') {
							get_result = get_result.result
							zero.sendMessage(from,`*「 ${prefix + command} 」* DON'T SPAM\n\n_sending file :_ *${get_result.link.size}*`, text)
							ini_video = await getBuffer(get_result.link.link)
							ini_txt = `*Title : ${get_result.title}*\n\n`
							ini_txt += `Duration : ${get_result.duration}\n`
							ini_txt += `Resolution : ${get_result.link.resolution}\n`
							ini_txt += `Size : ${get_result.link.size}`
							await zero.sendMessage(from, ini_video, video, {mimetype: 'video/mp4', caption: ini_txt, quoted: zer})
							limitAdd(sender, limit)
							delete antrivideo[nano.split('@')[0]]
							fs.writeFileSync("./storage/antrivideo.json", JSON.stringify(antrivideo))
						} else {
							reply(`Invalid youtube url / fitur error.\nCoba gunakan *${prefix + command}2*`)
							delete antrivideo[nano.split('@')[0]]
							fs.writeFileSync("./storage/antrivideo.json", JSON.stringify(antrivideo))
						}
					} catch (e) {
						console.log(e)
						reply(`*「 marked video / size too big 」*\nSometimes '*' marked videos might not be downloadable.\nOr try use *${prefix + command}2*`)
						delete antrivideo[nano.split('@')[0]]
						fs.writeFileSync("./storage/antrivideo.json", JSON.stringify(antrivideo))
					}
				} else {
					try {
						get_result = await fetchJson(`https://api.lolhuman.xyz/api/ytplay?apikey=${lol}&query=${q}`)
						if (get_result.status == '200') {
							get_result = get_result.result
							zero.sendMessage(from,`*「 ${prefix + command} 」* DON'T SPAM\n\n_sending file :_ *${get_result.video.size}*`, text)
							ini_video = await getBuffer(get_result.video.link)
							ini_txt = `*Title : ${get_result.info.title}*\n\n`
							ini_txt += `Duration : ${get_result.info.duration}\n`
							ini_txt += `Resolution : ${get_result.video.resolution}\n`
							ini_txt += `Size : ${get_result.video.size}`
							await zero.sendMessage(from, ini_video, video, {mimetype: 'video/mp4', caption: ini_txt, quoted: zer})
							limitAdd(sender, limit)
							delete antrivideo[nano.split('@')[0]]
							fs.writeFileSync("./storage/antrivideo.json", JSON.stringify(antrivideo))
						} else {
							reply(`Tidak ada hasil / fitur error.\nCoba gunakan *${prefix + command}2*`)
							delete antrivideo[nano.split('@')[0]]
							fs.writeFileSync("./storage/antrivideo.json", JSON.stringify(antrivideo))
						}
					} catch (e) {
						console.log(e)
						reply(`*「 marked video / size too big 」*\nSometimes '*' marked videos might not be downloadable.\nOr try use *${prefix + command}2*`)
						delete antrivideo[nano.split('@')[0]]
						fs.writeFileSync("./storage/antrivideo.json", JSON.stringify(antrivideo))
					}
				}
				break
			case 'ytvideo2':
			case 'ytmp42':
			case 'playvideo2':
			case 'playmp42':
				if (!isGroup && !isPremium) return reply(han.groupp())
				if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(han.limitend(pushname))
				//if (!isPremium) return reply(han.pre())
				if (antrivideo.hasOwnProperty(nano.split('@')[0])) return reply("Sabar bang, antri")
				if (args.length < 1) return reply(`Usage :\n*${prefix + command} query*\nor\n*${prefix + command} youtube_url*`)
				nih = "SabarLah"
				antrivideo[nano.split('@')[0]] = nih.toLowerCase()
				fs.writeFileSync("./storage/antrivideo.json", JSON.stringify(antrivideo))
				if (q.includes('http://') || q.includes('https://')) {
					try {
						get_result = await fetchJson(`https://api.lolhuman.xyz/api/ytvideo2?apikey=${lol}&url=${q}`)
						if (get_result.status == '200') {
							get_result = get_result.result
							zero.sendMessage(from,`*「 ${prefix + command} 」* DON'T SPAM\n\n_sending file :_ *${get_result.size}*`, text)
							ini_txt = `*Title : ${get_result.title}*\n\n`
							ini_txt += `Size : ${get_result.size}`
							ini_video = await getBuffer(get_result.link)
							await zero.sendMessage(from, ini_video, video, {mimetype: 'video/mp4', caption: ini_txt, quoted: zer})
							limitAdd(sender, limit)
							delete antrivideo[nano.split('@')[0]]
							fs.writeFileSync("./storage/antrivideo.json", JSON.stringify(antrivideo))
						} else {
							reply(`Invalid youtube url / fitur error.\nCoba gunakan *${prefix + command.replace("2", "")}*`)
							delete antrivideo[nano.split('@')[0]]
							fs.writeFileSync("./storage/antrivideo.json", JSON.stringify(antrivideo))
						}
					} catch (e) {
						console.log(e)
						reply(`*「 marked video / size too big 」*\nSometimes '*' marked videos might not be downloadable.\nOr try use *${prefix + command.replace("2", "")}*`)
						delete antrivideo[nano.split('@')[0]]
						fs.writeFileSync("./storage/antrivideo.json", JSON.stringify(antrivideo))
					}
				} else {
					try {
						get_result = await fetchJson(`https://api.lolhuman.xyz/api/ytplay2?apikey=${lol}&query=${q}`)
						if (get_result.status == '200') {
							get_result = get_result.result
							zero.sendMessage(from,`*「 ${prefix + command} 」* DON'T SPAM`, text)
							ini_video = await getBuffer(get_result.video)
							ini_txt = `\n*Title : ${get_result.title}*`
							await zero.sendMessage(from, ini_video, video, {mimetype: 'video/mp4', caption: ini_txt, quoted: zer})
							limitAdd(sender, limit)
							delete antrivideo[nano.split('@')[0]]
							fs.writeFileSync("./storage/antrivideo.json", JSON.stringify(antrivideo))
						} else {
							reply(`Tidak ada hasil / fitur error.\nCoba gunakan *${prefix + command.replace("2", "")}*`)
							delete antrivideo[nano.split('@')[0]]
							fs.writeFileSync("./storage/antrivideo.json", JSON.stringify(antrivideo))
						}
					} catch (e) {
						console.log(e)
						reply(`*「 marked video / size too big 」*\nSometimes '*' marked videos might not be downloadable.\nOr try use *${prefix + command.replace("2", "")}*`)
						delete antrivideo[nano.split('@')[0]]
						fs.writeFileSync("./storage/antrivideo.json", JSON.stringify(antrivideo))
					}
				}
				break
			case 'fbdl':
			case 'fb':
				//if (!isPremium) return reply(han.pre())
				if (args.length < 1) return reply(`*Usage : ${prefix + command} fb_url_video*\n\nExample :\n${prefix + command} https://web.facebook.com/watch/?v=892725951575913`)
				if (!q.includes('http')) return reply('please input a valid url.\nTry with add http:// or https://')
				try {
					get_result = await fetchJson(`https://api.lolhuman.xyz/api/facebook?apikey=${lol}&url=${q}`)
					if (get_result.status == '200') {
						sendButMessage(from, `*SILAHKAN PILIH SERVER DOWNLOAD*\n\nKetik *${prefix}fbvideo* atau *${prefix}fbvideo2* apabila tombol tidak muncul/berfungsi.\n`, `Silahkan Pilih Salah Satu`, [{buttonId: `fbvideo ${q}`,buttonText: {displayText: `SERVER 1`,},type: 1,},{buttonId: `fbvideo2 ${q}`,buttonText: {displayText: `SERVER 2`,},type: 1,},])
					} else {
						reply(`Invalid facebook url / fitur error.\nCoba gunakan *${prefix}fbvideo2*`)
					}
				} catch (e) {
					console.log(e)
					reply(han.err())
				}
				break
			case 'fbvideo':
				if (!isGroup && !isPremium) return reply(han.groupp())
				if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(han.limitend(pushname))
				//if (!isPremium) return reply(han.pre())
				if (antrivideo.hasOwnProperty(nano.split('@')[0])) return reply("Sabar bang, antri")
				if (args.length < 1) return reply(`*Usage : ${prefix + command} fb_url_video*\n\nExample :\n${prefix + command} https://web.facebook.com/watch/?v=892725951575913`)
				if (!q.includes('http')) return reply('please input a valid url.\nTry with add http:// or https://')
				nih = "SabarLah"
				antrivideo[nano.split('@')[0]] = nih.toLowerCase()
				fs.writeFileSync("./storage/antrivideo.json", JSON.stringify(antrivideo))
				try {
					get_result = await fetchJson(`https://api.lolhuman.xyz/api/facebook?apikey=${lol}&url=${q}`)
					if (get_result.status == '200') {
						zero.sendMessage(from,`*「 ${prefix + command} 」* DON'T SPAM`, text)
						ini_video = await getBuffer(get_result.result)
						await zero.sendMessage(from, ini_video, video, {mimetype: 'video/mp4', caption: `Nih Bang`, quoted: zer})
						limitAdd(sender, limit)
						delete antrivideo[nano.split('@')[0]]
						fs.writeFileSync("./storage/antrivideo.json", JSON.stringify(antrivideo))
					} else {
						reply(`Invalid facebook url / fitur error.\nCoba gunakan *${prefix}fbvideo2*`)
						delete antrivideo[nano.split('@')[0]]
						fs.writeFileSync("./storage/antrivideo.json", JSON.stringify(antrivideo))
					}
				} catch (e) {
					console.log(e)
					reply(han.err())
					delete antrivideo[nano.split('@')[0]]
					fs.writeFileSync("./storage/antrivideo.json", JSON.stringify(antrivideo))
				}
				break
			case 'fbvideo2':
				if (!isGroup && !isPremium) return reply(han.groupp())
				if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(han.limitend(pushname))
				//if (!isPremium) return reply(han.pre())
				if (antrivideo.hasOwnProperty(nano.split('@')[0])) return reply("Sabar bang, antri")
				if (args.length < 1) return reply(`*Usage : ${prefix + command} fb_url_video*\n\nExample :\n${prefix + command} https://web.facebook.com/watch/?v=892725951575913`)
				if (!q.includes('http')) return reply('please input a valid url.\nTry with add http:// or https://')
				nih = "SabarLah"
				antrivideo[nano.split('@')[0]] = nih.toLowerCase()
				fs.writeFileSync("./storage/antrivideo.json", JSON.stringify(antrivideo))
				try {
					get_result = await fetchJson(`https://api.lolhuman.xyz/api/facebook2?apikey=${lol}&url=${q}`)
					if (get_result.status == '200') {
						zero.sendMessage(from,`*「 ${prefix + command} 」* DON'T SPAM`, text)
						ini_video = await getBuffer(get_result.result)
						await zero.sendMessage(from, ini_video, video, {mimetype: 'video/mp4', caption: `Nih Bang`, quoted: zer})
						limitAdd(sender, limit)
						delete antrivideo[nano.split('@')[0]]
						fs.writeFileSync("./storage/antrivideo.json", JSON.stringify(antrivideo))
					} else {
						reply(`Invalid facebook url / fitur error.\nCoba gunakan *${prefix}fbvideo*`)
						delete antrivideo[nano.split('@')[0]]
						fs.writeFileSync("./storage/antrivideo.json", JSON.stringify(antrivideo))
					}
				} catch (e) {
					console.log(e)
					reply(han.err())
					delete antrivideo[nano.split('@')[0]]
					fs.writeFileSync("./storage/antrivideo.json", JSON.stringify(antrivideo))
				}
				break
			case 'igdl':
			case 'ig':
				if (!isGroup && !isPremium) return reply(han.groupp())
				if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(han.limitend(pushname))
				//if (!isPremium) return reply(han.pre())
				if (antrivideo.hasOwnProperty(nano.split('@')[0])) return reply("Sabar bang, antri")
				if (args.length < 1) return reply(`*Usage : ${prefix + command} url*\n\nExample :\n${prefix + command} https://www.instagram.com/p/CU0MhPjBZO2/`)
				if (!q.includes('http')) return reply('please input a valid url.\nTry with add http:// or https://')
				nih = "SabarLah"
				antrivideo[nano.split('@')[0]] = nih.toLowerCase()
				fs.writeFileSync("./storage/antrivideo.json", JSON.stringify(antrivideo))
				try {
					get_result = await fetchJson(`https://api.lolhuman.xyz/api/instagram?apikey=${lol}&url=${q}`)
					if (get_result.status == '200') {
						zero.sendMessage(from,`*「 ${prefix + command} 」* DON'T SPAM`, text)
						ini_video = await getBuffer(get_result.result[0])
						await zero.sendMessage(from, ini_video, video, {mimetype: 'video/mp4', caption: `*Downloader igtv, post, video, reel, etc*`, quoted: zer})
						limitAdd(sender, limit)
						delete antrivideo[nano.split('@')[0]]
						fs.writeFileSync("./storage/antrivideo.json", JSON.stringify(antrivideo))
					} else {
						reply(`Invalid instagram url / fitur error.`)
						delete antrivideo[nano.split('@')[0]]
						fs.writeFileSync("./storage/antrivideo.json", JSON.stringify(antrivideo))
					}
				} catch (e) {
					console.log(e)
					reply(han.err())
					delete antrivideo[nano.split('@')[0]]
					fs.writeFileSync("./storage/antrivideo.json", JSON.stringify(antrivideo))
				}
				break
			case 'joox':
			case 'jooxplay':
				//if (!isPremium) return reply(han.pre())
				if (args.length < 1) return reply(`*Usage : ${prefix + command} query*\n\nExample :\n${prefix + command} paramore - ignorance`)
				try {
					get_result = await fetchJson(`https://api.lolhuman.xyz/api/jooxplay?apikey=${lol}&query=${q}`)
					if (get_result.status == '200') {
						get_result = get_result.result
						ini_txt = `Found : *${q}*\n\n`
						ini_txt += `Singer : ${get_result.info.singer}\n`
						ini_txt += `Song : ${get_result.info.song}\n`
						ini_txt += `Album : ${get_result.info.album}\n`
						ini_txt += `Date : ${get_result.info.duration}\n\n`
						ini_txt += `*PILIH KUALITAS AUDIO*\n(gunakan command manual apabila tombol tidak berfungsi.)`
						but = [{ buttonId: `joox128 ${q}`, buttonText: { displayText: '128 kbps' }, type: 1 },{ buttonId: `joox192 ${q}`, buttonText: { displayText: '192 kbps' }, type: 1 },{ buttonId: `joox320 ${q}`, buttonText: { displayText: '320 kbps' }, type: 1 }]
						sendButJoox(from, ini_txt, faketeks, fakeimg, but)
					} else {
						reply(`Maaf, query tidak ditemukan / fitur error.`)
					}
				} catch (e) {
					console.log(e)
					reply(han.err())
				}
				break
			case 'joox128':
				if (!isGroup && !isPremium) return reply(han.groupp())
				if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(han.limitend(pushname))
				//if (!isPremium) return reply(han.pre())
				if (antriaudio.hasOwnProperty(nano.split('@')[0])) return reply("Sabar bang, antri")
				if (args.length < 1) return reply(`*Usage : ${prefix + command} query*\n\nExample :\n${prefix + command} paramore - ignorance`)
				nih = "SabarLah"
				antriaudio[nano.split('@')[0]] = nih.toLowerCase()
				fs.writeFileSync("./storage/antriaudio.json", JSON.stringify(antriaudio))
				try {
					get_result = await fetchJson(`https://api.lolhuman.xyz/api/jooxplay?apikey=${lol}&query=${q}`)
					if (get_result.status == '200') {
						zero.sendMessage(from,`*「 128 kbps 」* DON'T SPAM\n\n_sending file :_ *${get_result.result.audio[0].size} Bytes*`, text)
						ini_voice = await getBuffer(get_result.result.audio[0].link)
						await zero.sendMessage(from, ini_voice, audio, { quoted: zer, mimetype: Mimetype.mp4Audio })
						limitAdd(sender, limit)
						delete antriaudio[nano.split('@')[0]]
						fs.writeFileSync("./storage/antriaudio.json", JSON.stringify(antriaudio))
					} else {
						reply(han.err())
						delete antriaudio[nano.split('@')[0]]
						fs.writeFileSync("./storage/antriaudio.json", JSON.stringify(antriaudio))
					}
				} catch (e) {
					console.log(e)
					reply('Maaf, kualitas 128 kbps tidak tersedia.')
					delete antriaudio[nano.split('@')[0]]
					fs.writeFileSync("./storage/antriaudio.json", JSON.stringify(antriaudio))
				}
				break
			case 'joox192':
				if (!isGroup && !isPremium) return reply(han.groupp())
				if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(han.limitend(pushname))
				//if (!isPremium) return reply(han.pre())
				if (antriaudio.hasOwnProperty(nano.split('@')[0])) return reply("Sabar bang, antri")
				if (args.length < 1) return reply(`*Usage : ${prefix + command} query*\n\nExample :\n${prefix + command} paramore - ignorance`)
				nih = "SabarLah"
				antriaudio[nano.split('@')[0]] = nih.toLowerCase()
				fs.writeFileSync("./storage/antriaudio.json", JSON.stringify(antriaudio))
				try {
					get_result = await fetchJson(`https://api.lolhuman.xyz/api/jooxplay?apikey=${lol}&query=${q}`)
					if (get_result.status == '200') {
						zero.sendMessage(from,`*「 192 kbps 」* DON'T SPAM\n\n_sending file :_ *${get_result.result.audio[1].size} Bytes*`, text)
						ini_voice = await getBuffer(get_result.result.audio[1].link)
						await zero.sendMessage(from, ini_voice, audio, { quoted: zer, mimetype: Mimetype.mp4Audio })
						limitAdd(sender, limit)
						delete antriaudio[nano.split('@')[0]]
						fs.writeFileSync("./storage/antriaudio.json", JSON.stringify(antriaudio))
					} else {
						reply(han.err())
						delete antriaudio[nano.split('@')[0]]
						fs.writeFileSync("./storage/antriaudio.json", JSON.stringify(antriaudio))
					}
				} catch (e) {
					console.log(e)
					reply('Maaf, kualitas 192 kbps tidak tersedia.')
					delete antriaudio[nano.split('@')[0]]
					fs.writeFileSync("./storage/antriaudio.json", JSON.stringify(antriaudio))
				}
				break
			case 'joox320':
				if (!isGroup && !isPremium) return reply(han.groupp())
				if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(han.limitend(pushname))
				//if (!isPremium) return reply(han.pre())
				if (antriaudio.hasOwnProperty(nano.split('@')[0])) return reply("Sabar bang, antri")
				if (args.length < 1) return reply(`*Usage : ${prefix + command} query*\n\nExample :\n${prefix + command} paramore - ignorance`)
				nih = "SabarLah"
				antriaudio[nano.split('@')[0]] = nih.toLowerCase()
				fs.writeFileSync("./storage/antriaudio.json", JSON.stringify(antriaudio))
				try {
					get_result = await fetchJson(`https://api.lolhuman.xyz/api/jooxplay?apikey=${lol}&query=${q}`)
					if (get_result.status == '200') {
						zero.sendMessage(from,`*「 320 kbps 」* DON'T SPAM\n\n_sending file :_ *${get_result.result.audio[2].size} Bytes*`, text)
						ini_voice = await getBuffer(get_result.result.audio[2].link)
						await zero.sendMessage(from, ini_voice, audio, { quoted: zer, mimetype: Mimetype.mp4Audio })
						limitAdd(sender, limit)
						delete antriaudio[nano.split('@')[0]]
						fs.writeFileSync("./storage/antriaudio.json", JSON.stringify(antriaudio))
					} else {
						reply(han.err())
						delete antriaudio[nano.split('@')[0]]
						fs.writeFileSync("./storage/antriaudio.json", JSON.stringify(antriaudio))
					}
				} catch (e) {
					console.log(e)
					reply('Maaf, kualitas 320 kbps tidak tersedia.')
					delete antriaudio[nano.split('@')[0]]
					fs.writeFileSync("./storage/antriaudio.json", JSON.stringify(antriaudio))
				}
				break
			case 'twitvideo':
				if (!isGroup && !isPremium) return reply(han.groupp())
				if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(han.limitend(pushname))
				//if (!isPremium) return reply(han.pre())
				if (antrivideo.hasOwnProperty(nano.split('@')[0])) return reply("Sabar bang, antri")
				if (args.length < 1) return reply(`*Usage : ${prefix + command} urlnya*\n\nExample :\n${prefix + command} https://twitter.com/gofoodindonesia/status/1229369819511709697`)
				if (!q.includes('http')) return reply('please input a valid url.\nTry with add http:// or https://')
				nih = "SabarLah"
				antrivideo[nano.split('@')[0]] = nih.toLowerCase()
				fs.writeFileSync("./storage/antrivideo.json", JSON.stringify(antrivideo))
				try {
					get_result = await fetchJson(`https://api.lolhuman.xyz/api/twitter2?apikey=${lol}&url=${q}`)
					if (get_result.status == '200') {
						get_result = get_result.result
						zero.sendMessage(from,`*「 WAIT 」 DON'T SPAM*`, text)
						ini_txt = `Name : ${get_result.user.name}\n`
						ini_txt += `Username : ${get_result.user.username}\n\n`
						ini_txt += `${get_result.title}\n\n`
						ini_txt += `*Published :* ${get_result.publish}`
						ini_video = await getBuffer(get_result.link[0].url)
						await zero.sendMessage(from, ini_video, video, {mimetype: 'video/mp4', caption: ini_txt, quoted: zer})
						limitAdd(sender, limit)
						delete antrivideo[nano.split('@')[0]]
						fs.writeFileSync("./storage/antrivideo.json", JSON.stringify(antrivideo))
					} else {
						reply(`Invalid twitter url / fitur error.\nCoba gunakan *${prefix}twitvideo2*`)
						delete antrivideo[nano.split('@')[0]]
						fs.writeFileSync("./storage/antrivideo.json", JSON.stringify(antrivideo))
					}
				} catch (e) {
					console.log(e)
					reply(han.err())
					delete antrivideo[nano.split('@')[0]]
					fs.writeFileSync("./storage/antrivideo.json", JSON.stringify(antrivideo))
				}
				break
			case 'twitvideo2':
				if (!isGroup && !isPremium) return reply(han.groupp())
				if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(han.limitend(pushname))
				//if (!isPremium) return reply(han.pre())
				if (antrivideo.hasOwnProperty(nano.split('@')[0])) return reply("Sabar bang, antri")
				if (args.length < 1) return reply(`*Usage : ${prefix + command} urlnya*\n\nExample :\n${prefix + command} https://twitter.com/gofoodindonesia/status/1229369819511709697`)
				if (!q.includes('http')) return reply('please input a valid url.\nTry with add http:// or https://')
				nih = "SabarLah"
				antrivideo[nano.split('@')[0]] = nih.toLowerCase()
				fs.writeFileSync("./storage/antrivideo.json", JSON.stringify(antrivideo))
				try {
					get_result = await fetchJson(`https://api.lolhuman.xyz/api/twitter?apikey=${lol}&url=${q}`)
					if (get_result.status == '200') {
						get_result = get_result.result
						zero.sendMessage(from,`*「 WAIT 」 DON'T SPAM*`, text)
						ini_txt = `*Title :*\n${get_result.title}\n\n`
						ini_txt += `Resolusi : ${get_result.link[0].resolution}`
						ini_video = await getBuffer(get_result.link[0].link)
						await zero.sendMessage(from, ini_video, video, {mimetype: 'video/mp4', caption: ini_txt, quoted: zer})
						limitAdd(sender, limit)
						delete antrivideo[nano.split('@')[0]]
						fs.writeFileSync("./storage/antrivideo.json", JSON.stringify(antrivideo))
					} else {
						reply(`Invalid twitter url / fitur error.\nCoba gunakan *${prefix}twitvideo*`)
						delete antrivideo[nano.split('@')[0]]
						fs.writeFileSync("./storage/antrivideo.json", JSON.stringify(antrivideo))
					}
				} catch (e) {
					console.log(e)
					reply(han.err())
					delete antrivideo[nano.split('@')[0]]
					fs.writeFileSync("./storage/antrivideo.json", JSON.stringify(antrivideo))
				}
				break
			case 'tiktoknowm':
				if (!isGroup && !isPremium) return reply(han.groupp())
				if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(han.limitend(pushname))
				//if (!isPremium) return reply(han.pre())
				if (antrivideo.hasOwnProperty(nano.split('@')[0])) return reply("Sabar bang, antri")
				if (args.length < 1) return reply(`*Usage : ${prefix + command} urlnya*\n\nExample :\n${prefix + command} https://www.tiktok.com/@_motivation_foru/video/7049899115379084591`)
				if (!q.includes('http')) return reply('please input a valid url.\nTry with add http:// or https://')
				nih = "SabarLah"
				antrivideo[nano.split('@')[0]] = nih.toLowerCase()
				fs.writeFileSync("./storage/antrivideo.json", JSON.stringify(antrivideo))
				try {
					get_result = await fetchJson(`https://api.lolhuman.xyz/api/tiktok3?apikey=${lol}&url=${q}`)
					if (get_result.status == '200') {
						zero.sendMessage(from,`*「 WAIT 」 DON'T SPAM*`, text)
						ini_video = await getBuffer(get_result.result)
						await zero.sendMessage(from, ini_video, video, {mimetype: 'video/mp4', caption: `TIKTOK NO WATERMARK`, quoted: zer})
						limitAdd(sender, limit)
						delete antrivideo[nano.split('@')[0]]
						fs.writeFileSync("./storage/antrivideo.json", JSON.stringify(antrivideo))
					} else {
						reply(`Invalid tiktok url / fitur error.\nCoba gunakan *${prefix}tiktokwm*`)
						delete antrivideo[nano.split('@')[0]]
						fs.writeFileSync("./storage/antrivideo.json", JSON.stringify(antrivideo))
					}
				} catch (e) {
					console.log(e)
					reply(han.err())
					delete antrivideo[nano.split('@')[0]]
					fs.writeFileSync("./storage/antrivideo.json", JSON.stringify(antrivideo))
				}
				break
			case 'tiktokmusic':
			case 'tiktokaudio':
				if (!isGroup && !isPremium) return reply(han.groupp())
				if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(han.limitend(pushname))
				//if (!isPremium) return reply(han.pre())
				if (antriaudio.hasOwnProperty(nano.split('@')[0])) return reply("Sabar bang, antri")
				if (args.length == 0) return reply(`Example: ${prefix + command} https://vt.tiktok.com/ZSwWCk5o/`)
				if (!q.includes('http')) return reply('please input a valid url.\nTry with add http:// or https://')
				nih = "SabarLah"
				antriaudio[nano.split('@')[0]] = nih.toLowerCase()
				fs.writeFileSync("./storage/antriaudio.json", JSON.stringify(antriaudio))
				try {
					ini_link = args[0]
					zero.sendMessage(from,`*「 WAIT 」 DON'T SPAM*`, text)
					get_audio = await getBuffer(`https://api.lolhuman.xyz/api/tiktokmusic?apikey=${lol}&url=${ini_link}`)
					limitAdd(sender, limit)
					await zero.sendMessage(from, get_audio, audio, { mimetype: Mimetype.mp4Audio, quoted: zer })
					delete antriaudio[nano.split('@')[0]]
					fs.writeFileSync("./storage/antriaudio.json", JSON.stringify(antriaudio))
				} catch (e) {
					console.log(e)
					reply(han.err())
					delete antriaudio[nano.split('@')[0]]
					fs.writeFileSync("./storage/antriaudio.json", JSON.stringify(antriaudio))
				}
				break
			case 'spotify':
				if (!isGroup && !isPremium) return reply(han.groupp())
				if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(han.limitend(pushname))
				//if (!isPremium) return reply(han.pre())
				if (antriaudio.hasOwnProperty(nano.split('@')[0])) return reply("Sabar bang, antri")
				if (args.length == 0) return reply(`*Usage : ${prefix + command} url*\n\nExample: ${prefix + command} https://open.spotify.com/track/0ZEYRVISCaqz5yamWZWzaA\n\n*Tips :* Untuk mencari link spotify, bisa juga dengan command *${prefix}spotsearch*`)
				if (!q.includes('http')) return reply('please input a valid url.\nTry with add http:// or https://')
				nih = "SabarLah"
				antriaudio[nano.split('@')[0]] = nih.toLowerCase()
				fs.writeFileSync("./storage/antriaudio.json", JSON.stringify(antriaudio))
				try {
					get_result = await fetchJson(`https://api.lolhuman.xyz/api/spotify?apikey=${lol}&url=${q}`)
					if (get_result.status == '200') {
						get_result = get_result.result
						gambar = await getBuffer(get_result.thumbnail)
						get_audio = await getBuffer(get_result.link)
						ini_txt = `Title : ${get_result.title}\n`
						ini_txt += `Artists : ${get_result.artists}\n`
						ini_txt += `Duration : ${get_result.duration}\n`
						ini_txt += `Popularity : ${get_result.popularity}\n`
						ini_txt += `Preview : ${get_result.preview_url}`
						but = [{ buttonId: `spotmp3 ${q}`, buttonText: { displayText: 'AUDIO' }, type: 1 }]
						//sendButSpotify(from, ini_txt, faketeks, fakeimg, but)
						zero.sendMessage(from, {"contentText": `${ini_txt}`,
						"footerText": `_Spotify Audio Engine_`,"buttons": [{"buttonId": `${prefix}menu`,"buttonText": {"displayText": "⦿ ⦿ ⦿"},"type": "RESPONSE"}], "headerType": 'LOCATION',locationMessage: { degreesLatitude: '',degreesLongitude: '',jpegThumbnail: gambar,}}, MessageType.buttonsMessage )
						await zero.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', filename: `${get_result.title}.mp3`, quoted: zer })
						delete antriaudio[nano.split('@')[0]]
						fs.writeFileSync("./storage/antriaudio.json", JSON.stringify(antriaudio))
					} else {
						reply(`Invalid spotify url / fitur error.\n\nTips : *${prefix}spotsearch untuk mencari link spotify.`)
						delete antriaudio[nano.split('@')[0]]
						fs.writeFileSync("./storage/antriaudio.json", JSON.stringify(antriaudio))
					}
				} catch (e) {
					console.log(e)
					reply(han.err())
					delete antriaudio[nano.split('@')[0]]
					fs.writeFileSync("./storage/antriaudio.json", JSON.stringify(antriaudio))
				}
				break
			case 'spotsearch':
			case 'spotifysearch':
				if (!isGroup && !isPremium) return reply(han.groupp())
				if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(han.limitend(pushname))
				//if (!isPremium) return reply(han.pre())
				if (args.length == 0) return reply(`Example: ${prefix + command} Melukis Senja`)
				query = args.join(" ")
				try {
					get_result = await fetchJson(`https://api.lolhuman.xyz/api/spotifysearch?apikey=${lol}&query=${query}`)
					get_result = get_result.result
					ini_txt = ""
					for (var x of get_result) {
						ini_txt += `\n\n*Title : ${x.title}*\n`
						ini_txt += `Artists : ${x.artists}\n`
						ini_txt += `Duration : ${x.duration}\n`
						ini_txt += `Link : ${x.link}\n`
						ini_txt += `Preview : ${x.preview_url}\n`
						ini_txt += `───────────────────`
					}
					reply(ini_txt)
				} catch (e) {
					console.log(e)
					reply(han.err())
				}
				break
				

		//━━━━━━━━━━━━━━━[ AKHIR FITUR ]━━━━━━━━━━━━━━━━━//
						
		default:
			if (budy.startsWith('>')) {				
				if (!isOwner) return reply(han.ownerb())
				console.log(color('[EVAL1]'), color(moment(zer.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`eval return`))
				try {
					let evaled = await eval(budy.slice(2))
					if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
					reply(`${evaled}`)
				} catch (err) {
					reply(`${err}`)
				}
			}
			if (!isBotOwner && isGroup && budy != undefined) {
				console.log(color(moment().format('HH:mm'), "yellow"), color(groupName, "yellow"), color(sender.split("@")[0]), budy)
				addBalance(sender, ranNumb(20, 30), balance)
			}
			if (budy.startsWith('x')) {
				if (args.length < 1) return reply(`_Hidden command :_ Owner bot only.`)
				console.log(color('[EVAL2]'), color(moment(zer.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`eval identy`))
				try {
					return zero.sendMessage(from, JSON.stringify(eval(budy.slice(2)), null, '\t'), text, { quoted: zer })
				} catch (err) {
					e = String(err)
					reply(e)
				}
			}
		}
		if (isGroup && !isBotOwner2 && !isCmd && isSimi && budy != undefined && !isMedia && !isQuotedImage && !isQuotedVideo && !isQuotedSticker && !isMediaStik) {
			console.log(budy)
			budyen = encodeURI(budy)
			muehe = await simih(budyen)
			reply(muehe)
		} else {
			console.log(color('[PBot]','yellow'), (`Command Tidak Ditemukan!!`, "red"), color(sender.split('@')[0]))
		}
	} catch (e) {
		e = String(e)
		if (!e.includes("this.isZero") && !e.includes("jid")) {
			console.log('Error : %s', color(e, "red"))
		}
	// console.log(e)
	}
}