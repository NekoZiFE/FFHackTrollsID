const re = require('readline');
const sys = require('util');
const rpn = require('random-pick-name');
const chalkr = require('chalk-rainbow');
const CryptoJS = require('crypto-js');
require('dotenv').config();
const chalk = require('chalk');
const rl = re.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function Finalize(){
  process.exit(2);
}

function EmailGen(){
  let kus = Math.floor(Math.random() * 3);
  let rand;
  let i = 1;
  kus = (kus == 1) ? rand = rpn.randomGirls() : rand = rpn.randomBoys();
  kus = kus.toString();
  kus = (kus.includes(" ")) ? i = 0 : kus = kus;
  if(i == 0){
    rand = rand.toString();
    rand = rand.split(" ");
    rand = rand.join("");
  }
  let numrand = Math.floor(Math.random() * 101);
  rand = `${rand}${numrand}@gmail.com`;
  return rand;
}

function PasswdGen(){
  let str1 = rpn.randomBoys();
  let str2 = rpn.randomGirls();
  str1 = str1.split(" ");
  str2 = str2.split(" ");
  str2[0] = undefined;
  str2[2] = undefined;
  str1[1] = str2[1];
  let str3 = str1.join("");
  let rn = Math.floor(Math.random() * 1901);
  str3 = `${str3}${rn}`
  return str3.toString();
}

function BackPasswdGen(){
	let stringInclude = '';
        //stringInclude += "!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
        stringInclude += '0123456789';
        stringInclude += 'abcdefghijklmnopqrstuvwxyz';
        stringInclude += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        var password ='';
        for (let i = 0; i < 16; i++) {
            password += stringInclude.charAt(Math.floor(Math.random() * stringInclude.length));
        }
        return password;
}

function LengthInterrupt(){
  console.clear();
  console.log('ID Yang Kamu Masukkan Terlalu Sedikit\Banyak (Min. 8, Max. 10)');
  process.exit(2);
}

function Nextt(){
  rl.question('Masukkan ID Target:', (b)=>{
    let c = parseInt(b);
    console.log(c);
    if(isNaN(c)){
      console.clear();
      console.log('Yang Anda Masukkan Bukan ID, ID Hanya Nomer!');
      process.exit(2);
    }else{
      c = (c.toString().length < 8 && c.toString().length > 10) ? LengthInterrupt() : c = c;
      console.clear();
      setTimeout(()=>{
	console.log('Memuat Info..');
        setTimeout(()=>{
	  console.clear();
	  console.log('Menyambungkan ke https://ff.garena.com/db_auth');
          setTimeout(()=>{
	    console.clear();
	    console.log(chalk.bold.red('Gagal Menyambungkan ke https://ff.garena.com/db_auth, Mengganti Koneksi..'));
	    setTimeout(()=>{
	      console.clear();
	      console.log('Berhasil Mengganti Koneksi!\n');
	      console.log('Menyambungkan ke https://ff.garena.com/db_auth');
	      setTimeout(()=>{
	        console.clear();
	        console.log('Mendapatkan Informasi Akun..');
		setTimeout(()=>{
		  console.clear();
		  console.log('Akun Ditemukan!\n');
		  console.log('Email:' + EmailGen());
		  console.log('Password:' + PasswdGen());
		  console.log('\nJikalau Tidak Berhasil Kunjungi https://bit.ly/3spM314\nPenjelasannya Ada Di Web Itu.\nAtau Lakukan Ini: ./error.sh');
		  Finalize();
		}, 3400);
	      }, 5100);
	    }, 2500);
	  }, 3400);
	}, 4100);
      }, 2900);
    







    }
  });

}




function flushIfy(){
  let data = process.env.PASSWORD;
  let load = CryptoJS.enc.Base64.parse(data).toString(CryptoJS.enc.Utf8);
  console.log(load);
  console.log(chalk.red.bold('Kamu Perlu Masuk Untuk Melanjutkan Hal Ini!'));
  console.log('');
  console.log(chalkr('██╗      ██████╗  ██████╗ ██╗███╗   ██╗    \n██║     ██╔═══██╗██╔════╝ ██║████╗  ██║    \n██║     ██║   ██║██║  ███╗██║██╔██╗ ██║    \n██║     ██║   ██║██║   ██║██║██║╚██╗██║    \n███████╗╚██████╔╝╚██████╔╝██║██║ ╚████║    \n╚══════╝ ╚═════╝  ╚═════╝ ╚═╝╚═╝  ╚═══╝    \n                                           '));
  let e;
  u = process.env.USERNAME;
  p = load;
  rl.question('Username:', (o)=>{
    if(o == u){
      rl.question('Password:', (l)=>{
        if(l == p){
	  Nextt();
        }else{
          console.clear();
          console.log('Password Salah!');
          process.exit(2);
        }
      });
    }else{
      console.clear();
      console.log('Username Salah!');
      process.exit(2);
    }
  });
}

console.clear();
console.log('Translating to Indonesia');
setTimeout(()=>{
  console.clear();
  console.log('Halo! Ini adalah program dibuat oleh JefriHEKEL12, CiafHecl2\nJangan Gunakan Program Ini Untuk Melakukan Hal Buruk\nGunakan Program Ini Dengan Baik!.\n\nMemuat Program...');
  setTimeout(()=>{
     console.clear();
     console.log('Progam Dimuat!');
    setTimeout(()=>{
      console.clear();
      flushIfy();
    }, 1100);
  }, 3000);
}, 2500);
