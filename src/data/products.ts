import { Product } from "@/types";

// Helper function to calculate prices: 1 USDT = 100 BDT = 100 INR
function createPrice(duration: string, usdt: number, note?: string) {
  return {
    duration,
    bdt: usdt * 100,
    inr: usdt * 100,
    usdt,
    ...(note && { note }),
  };
}

export const products: Product[] = [
  {
    id: "drip-clint-mobile",
    name: "DRIP CLINT MOD MENU APK",
    subtitle: "MIRAJ XHEAT OFFICIAL",
    image: "/assets/Drip clint.jpg",
    description: "📌 NOTE: It Will Run Directly On Your Phone And Will Be In Easy Use",
    features: [
      "🎚️ Aim Kill",
      "🎚️ Silent Aim",
      "🎚️ Silent Kill",
      "🎚️ Fly Hack",
      "🎚️ God Mode (Ghost)",
      "🎚️ Speed Timer",
      "🎚️ Teleport 8m",
      "🎚️ Up Player",
      "🎚️ Auto Swap Weapon"
    ],
    prices: [
      createPrice("1 Day", 2),
      createPrice("7 Days", 4),
      createPrice("15 Days", 8),
      createPrice("30 Days", 11),
    ],
  },
  {
    id: "drip-clint-pc",
    name: "DRIP CLINT MOD MENU PC",
    subtitle: "MIRAJ XHEAT OFFICIAL",
    image: "/assets/Drip clint.jpg",
    description: "📌 NOTE: Professional gaming solution with advanced features and easy setup.",
    features: [
      "🎚️ Aim Kill",
      "🎚️ Silent Aim",
      "🎚️ Silent Kill",
      "🎚️ Fly Hack",
      "🎚️ God Mode (Ghost)",
      "🎚️ Speed Timer",
      "🎚️ Teleport 8m",
      "🎚️ Up Player",
      "🎚️ Auto Swap Weapon"
    ],
    prices: [
      createPrice("1 Day", 2),
      createPrice("7 Days", 6),
      createPrice("15 Days", 10.9),
      createPrice("30 Days", 15),
    ],
  },
  {
    id: "drip-clint-root",
    name: "DRIP CLINT MOD MENU ROOT",
    subtitle: "MIRAJ XHEAT OFFICIAL",
    image: "/assets/Drip clint.jpg",
    description: "📌 NOTE: Root access version for maximum control and advanced features.",
    features: [
      "🎚️ Aim Kill",
      "🎚️ Silent Aim",
      "🎚️ Silent Kill",
      "🎚️ Fly Hack",
      "🎚️ God Mode (Ghost)",
      "🎚️ Speed Timer",
      "🎚️ Teleport 8m",
      "🎚️ Up Player",
      "🎚️ Auto Swap Weapon"
    ],
    prices: [
      createPrice("1 Day", 2),
      createPrice("7 Days", 4),
      createPrice("30 Days", 10),
    ],
  },
  {
    id: "br-mods-root",
    name: "BR MODE INJECTOR",
    subtitle: "MIRAJ XHEAT OFFICIAL",
    image: "/assets/br.png.jpg",
    description: "✅ 𝐍𝐎𝐓𝐄 : (VphoneOS Non Root) | ʀᴏᴏᴛ ᴅᴇᴠɪᴄᴇ | ᴇᴍᴜʟᴀᴛᴏʀ | ✓ 100% ʀᴀɴᴋ ᴡᴏʀᴋɪɴɢ",
    features: [
      "👍 Sɪʟᴇɴᴛ Aɪᴍʙᴏᴛ",
      "👍 Hᴇᴀᴅsʜᴏʀᴛ Hᴀᴄᴋ",
      "👍 Aɪᴍғᴏᴠ 360",
      "👍 Aɪᴍ Mᴀɢɴᴇᴛ",
      "👍 Sᴘᴇᴇᴅ Hᴀᴄᴋ",
      "👍 Gʜᴏsᴛ Hᴀᴄᴋ",
      "👍 ESP Lᴏᴄᴀᴛɪᴏɴ",
      "👍 🄲🅂 / 🄱🅁 Rᴀɴᴋ Wᴏʀᴋɪɴɢ"
    ],
    prices: [
      createPrice("7 Days", 4),
      createPrice("15 Days", 6),
      createPrice("30 Days", 8),
    ],
  },
  {
    id: "br-mods-bypass-pc",
    name: "BR MODS – BYPASS PC",
    subtitle: "MIRAJ XHEAT OFFICIAL",
    image: "/assets/br.png.jpg",
    description: "✅ 𝐍𝐎𝐓𝐄 : Emulator Bypass - Play in Mobile Lobby from PC | Advanced Anti-Detection | 100% Secure",
    features: [
      "🛡️ Eᴍᴜʟᴀᴛᴏʀ Bʏᴘᴀss (Mᴏʙɪʟᴇ Lᴏʙʙʏ)",
      "👍 Sɪʟᴇɴᴛ Aɪᴍʙᴏᴛ",
      "👍 Hᴇᴀᴅsʜᴏʀᴛ Hᴀᴄᴋ",
      "👍 Aɪᴍғᴏᴠ 360",
      "👍 Aɪᴍ Mᴀɢɴᴇᴛ",
      "👍 Sᴘᴇᴇᴅ Hᴀᴄᴋ",
      "👍 Gʜᴏsᴛ Hᴀᴄᴋ",
      "👍 ESP Lᴏᴄᴀᴛɪᴏɴ",
      "👍 🄲🅂 / 🄱🅁 Rᴀɴᴋ Wᴏʀᴋɪɴɢ"
    ],
    prices: [
      createPrice("1 Day", 3),
      createPrice("10 Days", 7),
      createPrice("30 Days", 12),
    ],
  },
  {
    id: "br-mods-silentaim-pc",
    name: "BR MODS – SILENTAIM PC",
    subtitle: "MIRAJ XHEAT OFFICIAL",
    image: "/assets/br.png.jpg",
    description: "✅ 𝐍𝐎𝐓𝐄 : High-Precision Silent Aim System | Performance Optimized for PC",
    features: [
      "🎯 Sɪʟᴇɴᴛ Aɪᴍ Sʏsᴛᴇᴍ (Mᴀɪɴ)",
      "👍 Hᴇᴀᴅsʜᴏʀᴛ Hᴀᴄᴋ",
      "👍 Aɪᴍғᴏᴠ 360",
      "👍 Aɪᴍ Mᴀɢɴᴇᴛ",
      "👍 Sᴘᴇᴇᴅ Hᴀᴄᴋ",
      "👍 Gʜᴏsᴛ Hᴀᴄᴋ",
      "👍 ESP Lᴏᴄᴀᴛɪᴏɴ",
      "👍 🄲🅂 / 🄱🅁 Rᴀɴᴋ Wᴏʀᴋɪɴɢ"
    ],
    prices: [
      createPrice("1 Day", 2),
      createPrice("10 Days", 5),
      createPrice("30 Days", 12),
    ],
  },
  {
    id: "hg-cheats",
    name: "HG CHEATS",
    subtitle: "MIRAJ XHEAT OFFICIAL",
    image: "/assets/hg.jpg",
    description: "Premium HG cheats with advanced features and regular updates.",
    features: [
      "Premium quality",
      "Regular updates",
      "Advanced features",
      "24/7 support"
    ],
    prices: [
      createPrice("1 Day", 2),
      createPrice("10 Days", 3),
      createPrice("30 Days", 10),
    ],
  },
  {
    id: "prime-mods",
    name: "PRIME MODS",
    subtitle: "MIRAJ XHEAT OFFICIAL",
    image: "/assets/prime.jpg.png",
    description: "Prime quality mods with exclusive features and premium support.",
    features: [
      "Prime quality",
      "Exclusive features",
      "Premium support",
      "Fast updates"
    ],
    prices: [
      createPrice("5 Days", 4),
      createPrice("10 Days", 6),
    ],
  },
  {
    id: "syscall-controls",
    name: "SYSCALL CONTROLS",
    subtitle: "MIRAJ XHEAT OFFICIAL",
    image: "/assets/logo.jpg",
    description: "Advanced syscall controls with system-level access and optimization.",
    features: [
      "System-level access",
      "Advanced controls",
      "Optimized performance",
      "Secure & safe"
    ],
    prices: [
      createPrice("5 Days", 3.5),
      createPrice("10 Days", 6),
      createPrice("20 Days", 10),
    ],
  },
  {
    id: "pato-team",
    name: "PATO TEAM",
    subtitle: "MIRAJ XHEAT OFFICIAL",
    image: "/assets/Pato team.jpg",
    description: "Professional team solution with enterprise-level features.",
    features: [
      "Team features",
      "Enterprise level",
      "Professional grade",
      "Multi-user support"
    ],
    prices: [
      createPrice("1 Day", 2.5),
      createPrice("3 Days", 4),
      createPrice("7 Days", 8),
    ],
  },
  {
    id: "fluorite-ios",
    name: "FLUORITE iOS PANEL",
    subtitle: "iPhone 6–17",
    image: "/assets/Flourite.jpg",
    description: "iOS optimized solution for iPhone users with full device support.",
    features: [
      "👍 𝐀𝐢𝗺𝐛𝗼𝘁 – Neck | Head | Body",
      "👍 𝗕𝗼𝗻𝗲 𝗔𝗶𝗺𝗯𝗼𝘁 – Pinpoint Accuracy",
      "👍 𝗦𝗶𝗹𝗲𝗻𝘁 𝗔𝗶𝗺 – No Movement, Just Kill",
      "👍 𝗖𝘂𝘀𝘁𝗼𝗺 𝗔𝗶𝗺𝗙𝗢𝗩 – Smooth Control",
      "👍 𝗦𝗽𝗲𝗲𝗱 𝗕𝗼𝗼𝘀𝘁 – 𝟏𝟎𝐱 Faster Than Normal",
      "👍 𝗘𝗦𝗣 𝗟𝗼𝗰𝗮𝘁𝗶𝗼𝗻 – See Enemies Before They See",
      "👍 𝐒𝐓𝐑𝐄𝐀𝐌𝐄𝐑 𝐌𝐎𝐃𝐄 – 𝐅𝐨𝐫 𝐒𝐞𝐜𝐫𝐞𝐭 𝐏𝐥𝐚𝐲",
      "😀 𝗠𝗔𝗜𝗡 𝗜𝗗 𝗦𝗔𝗙𝗘",
      "😀 𝗡𝗼 𝗶𝗣𝗵𝗼𝗻𝗲 𝗥𝗲𝘀𝘁𝗮𝗿𝘁 – Plug & Play",
      "💀 𝗔𝗱𝘃𝗮𝗻𝗰𝗲𝗱 𝗔𝗻𝘁𝗶𝗕𝗮𝗻 – Maximum Protection",
      "✅ No one will be able to see ESP / Aim in screen share",
      "✅ Only you can see everything"
    ],
    prices: [
      createPrice("1 Day", 4),
      createPrice("7 Days", 15),
      createPrice("31 Days", 25),
    ],
  },
  {
    id: "lk-team-root-emu",
    name: "LK TEAM – ROOT + EMU PC",
    subtitle: "MIRAJ XHEAT OFFICIAL",
    image: "/assets/Lk team.png",
    description: "Root and emulator support for PC with advanced emulation features.",
    features: [
      "Root support",
      "Emulator compatible",
      "PC optimized",
      "Advanced features"
    ],
    prices: [
      createPrice("1 Day", 2),
      createPrice("5 Days", 3),
      createPrice("10 Days", 5),
      createPrice("30 Days", 10),
    ],
  },
  {
    id: "mr-robot",
    name: "MR ROBOT",
    subtitle: "MIRAJ XHEAT OFFICIAL",
    image: "/assets/mr-robot.jpg",
    description: "Advanced robotic system with AI-powered features and automation.",
    features: [
      "AI-powered",
      "Automation",
      "Advanced system",
      "Smart features"
    ],
    prices: [
      createPrice("10 Days", 4),
      createPrice("20 Days", 6),
    ],
  },
  {
    id: "g-box-ios",
    name: "G-BOX iOS",
    subtitle: "IPA SIGNER & INSTALLER",
    image: "/assets/logo.jpg",
    description: "📌 NOTE: Professional iOS IPA Signer and Installer. Use any IPA files on your iPhone without computer.",
    features: [
      "📦 Install IPA Files Directly",
      "🔧 No Computer Required",
      "⚡ Fast Signing Process",
      "🛡️ Anti-Revoke Support",
      "🍏 Compatible with Latest iOS",
      "🎨 Easy to Use Interface"
    ],
    prices: [
      createPrice("1 Year", 10),
    ],
  },
  {
    id: "esign-certificate",
    name: "E-SING CERTIFICATE",
    subtitle: "STABLE iOS CERTIFICATE",
    image: "/assets/logo.jpg",
    description: "📌 NOTE: Premium Enterprise Certificate for E-Sign and other signing tools with long-term stability.",
    features: [
      "📜 1 Year Stability Guarantee",
      "🔑 Individual Certificate Use",
      "🚀 Optimized for E-Sign / G-Box",
      "🛡️ Support All iOS Apps",
      "✅ Instant Activation",
      "🔒 Private & Secure"
    ],
    prices: [
      createPrice("1 Year", 10),
    ],
  },
  {
    id: "zolo-cheats-pubg",
    name: "ZOLO CHEATS PUBG",
    subtitle: "MIRAJ XHEAT OFFICIAL",
    image: "/assets/logo.jpg",
    description: "📌 NOTE: Premium PUBG mobile cheat with advanced features and high security.",
    features: [
      "🔥 Advance Aimbot",
      "🔥 ESP Wallhack",
      "🔥 No Recoil",
      "🔥 Speed Hack",
      "🔥 iPad View",
      "🔥 100% Safe & Anti-Ban"
    ],
    prices: [
      createPrice("1 Day", 2),
      createPrice("7 Days", 3),
      createPrice("30 Days", 10),
    ],
  },
];
