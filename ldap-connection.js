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