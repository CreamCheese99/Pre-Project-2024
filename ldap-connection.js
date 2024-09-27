const ldap = require('ldapjs');

// LDAP server configuration
const config = {
  url: 'ldap://10.252.92.100:389',
  baseDN: 'dc=kmitl,dc=ac,dc=th',
  username: '65030027@kmitl.ac.th',
  password: 'Omelaweng01'
};

// Create LDAP client
const client = ldap.createClient({
  url: config.url,
  tlsOptions: { rejectUnauthorized: false }
});

// Bind to LDAP server
client.bind(config.username, config.password, (err) => {
  if (err) {
    console.error('LDAP bind failed:', err);
    return;
  }
  
  console.log('LDAP bind successful');

  // Perform LDAP operations here
  // For example, you can search for users:
  const searchOptions = {
    scope: 'sub',
    filter: '(objectClass=person)'
  };

  client.search(config.baseDN, searchOptions, (err, res) => {
    if (err) {
      console.error('LDAP search failed:', err);
      return;
    }

    res.on('searchEntry', (entry) => {
      console.log('Entry:', entry.object);
    });

    res.on('error', (err) => {
      console.error('LDAP search error:', err);
    });

    res.on('end', (result) => {
      console.log('LDAP search completed');
      client.unbind();
    });
  });
});




// const ldap = require('ldapjs');

// const client = ldap.createClient({
//   url: 'ldap://10.252.92.100:389',
//   timeout: 5000,
//   connectTimeout: 10000,
// });

// const dn = 'DC=kmitl, DC=ac, DC=th';
// const password = 'mypassword';

// client.bind(dn, password, (err) => {
//   if (err) {
//     console.error('LDAP bind failed:', err);
//   } else {
//     console.log('LDAP bind successful');
//     // ดำเนินการต่อไป...
//   }
// });



// const ldap = require('ldapjs');

// // LDAP server configuration
// const config = {
//   url: 'ldap://10.252.92.100:389',
//   baseDN: 'dc=kmitl,dc=ac,dc=th',
//   username: 'uid=65030027,ou=siet,dc=kmitl,dc=ac,dc=th',
//   password: 'Omelaweng01'
// };

// // Create LDAP client
// const client = ldap.createClient({
//   url: config.url,
//   timeout: 5000,
//   connectTimeout: 10000
// });

// // Bind to LDAP server
// client.bind(`uid=${config.username},${config.baseDN}`, config.password, (err) => {
//   if (err) {
//     console.error('LDAP bind failed:', err);
//     return;
//   }

//   console.log('LDAP bind successful');

//   // Perform a simple search operation
//   const searchOptions = {
//     scope: 'sub',
//     filter: '(objectClass=person)'
//   };

//   client.search(config.baseDN, searchOptions, (err, res) => {
//     if (err) {
//       console.error('LDAP search failed:', err);
//       return;
//     }

//     res.on('searchEntry', (entry) => {
//       console.log('Entry:', entry.object);
//     });

//     res.on('error', (err) => {
//       console.error('LDAP search error:', err);
//     });

//     res.on('end', (result) => {
//       console.log('LDAP search completed');
//       client.unbind();
//     });
//   });
// });         




// const ldap = require('ldapjs');
// require('dotenv').config();

// // LDAP server configuration
// const config = {
//   url: process.env.LDAP_URL || 'ldap://10.252.92.100:389',
//   baseDN: process.env.LDAP_BASE_DN || 'dc=kmitl,dc=ac,dc=th',
//   username: process.env.LDAP_USERNAME,
//   password: process.env.LDAP_PASSWORD
// };

// console.log('กำลังใช้การตั้งค่า LDAP:', {
//   url: config.url,
//   baseDN: config.baseDN,
//   username: config.username,
//   password: config.password ? '********' : 'ไม่ได้ตั้งค่า'
// });

// // สร้าง LDAP client
// const client = ldap.createClient({
//   url: config.url,
//   timeout: 5000,
//   connectTimeout: 10000
// });

// // ฟังก์ชันสำหรับการเชื่อมต่อ LDAP
// function connectLDAP() {
//   return new Promise((resolve, reject) => {
//     client.bind(config.username, config.password, (err) => {
//       if (err) {
//         console.error('การเชื่อมต่อ LDAP ล้มเหลว:', err);
//         console.error('รายละเอียดข้อผิดพลาด:', JSON.stringify(err, null, 2));
//         reject(err);
//       } else {
//         console.log('เชื่อมต่อ LDAP สำเร็จ');
//         resolve();
//       }
//     });
//   });
// }

// // ฟังก์ชันสำหรับการค้นหา LDAP
// function searchLDAP() {
//   return new Promise((resolve, reject) => {
//     const searchOptions = {
//       scope: 'sub',
//       filter: '(objectClass=person)'
//     };

//     client.search(config.baseDN, searchOptions, (err, res) => {
//       if (err) {
//         console.error('การค้นหา LDAP ล้มเหลว:', err);
//         reject(err);
//         return;
//       }

//       const entries = [];

//       res.on('searchEntry', (entry) => {
//         entries.push(entry.object);
//       });

//       res.on('error', (err) => {
//         console.error('ข้อผิดพลาดในการค้นหา LDAP:', err);
//         reject(err);
//       });

//       res.on('end', () => {
//         console.log('การค้นหา LDAP เสร็จสมบูรณ์');
//         resolve(entries);
//       });
//     });
//   });
// }

// // ฟังก์ชันหลัก
// async function main() {
//   try {
//     await connectLDAP();
//     const searchResults = await searchLDAP();
//     console.log('ผลการค้นหา:', searchResults);
//   } catch (error) {
//     console.error('เกิดข้อผิดพลาด:', error);
//   } finally {
//     client.unbind();
//   }
// }

// main();


// const ldap = require('ldapjs');

// const client = ldap.createClient({
//   url: 'ldap://10.252.92.100:389',
//   reconnect: true,
// });

// client.on('error', (err) => {
//   console.error('LDAP error:', err);
// });

// client.bind('username', 'password', (err) => {
//   if (err) {
//     console.error('LDAP bind error:', err);
//   } else {
//     // Perform LDAP operations (e.g., search, modify)
//     client.search('dc=kmitl,dc=ac,dc=th', { filter: '(objectClass=user)' }, (err, res) => {
//       if (err) {
//         console.error('LDAP search error:', err);
//       } else {
//         res.on('searchEntry', (entry) => {
//           console.log('Entry:', entry.objectName, entry.attributes);
//         });
//         res.on('end', () => {
//           client.unbind((err) => {
//             if (err) {
//               console.error('LDAP unbind error:', err);
//             }
//           });
//         });
//       }
//     });
//   }
// });