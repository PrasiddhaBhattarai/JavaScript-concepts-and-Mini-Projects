// fetch()
// and error handling

const API_URL = 'https://jsonplaceholder.typicode.com/todos/1';
const API_URL_2 = 'https://api.github.com/users/PrasiddhaBhattarai';

async function getData(){
    try {
        console.log("making request");

        const data = await fetch(API_URL_2);

        console.log("got response headers, now waiting for the body");

        console.log(data);

        const jsonData = await data.json();

        console.log("turned the JSON to an object");

        console.log(jsonData);
        console.log(jsonData.id);
        
    } catch (err) {
        //we display error here if API_URL in fetch() is invalid
        console.error(err);
        // we can direct use to page like 404 not found, etc. from here
    }
}

getData();

//instead of using try catch  for error handling, we can use below instead as async fuction returns promise
// getData().catch( (err) => console.log(err));


// OUTPUT

// making request

// got response headers, now waiting for the body

// Response {
//   status: 200,
//   statusText: 'OK',
//   headers: Headers {
//     date: 'Sat, 12 Apr 2025 10:25:10 GMT',
//     'content-type': 'application/json; charset=utf-8',
//     'cache-control': 'public, max-age=60, s-maxage=60',
//     vary: 'Accept,Accept-Encoding, Accept, X-Requested-With',
//     etag: 'W/"dc8a1c1b96c5570ca8649fe962f30921312b181b7e04936007f57baa4ceee0f2"',
//     'last-modified': 'Thu, 06 Mar 2025 05:21:39 GMT',
//     'x-github-media-type': 'github.v3; format=json',
//     'x-github-api-version-selected': '2022-11-28',
//     'access-control-expose-headers': 'ETag, Link, Location, Retry-After, X-GitHub-OTP, X-RateLimit-Limit, X-RateLimit-Remaining, X-RateLimit-Used, X-RateLimit-Resource, X-RateLimit-Reset, X-OAuth-Scopes, X-Accepted-OAuth-Scopes, X-Poll-Interval, X-GitHub-Media-Type, X-GitHub-SSO, X-GitHub-Request-Id, Deprecation, Sunset',
//     'access-control-allow-origin': '*',
//     'strict-transport-security': 'max-age=31536000; includeSubdomains; preload',
//     'x-frame-options': 'deny',
//     'x-content-type-options': 'nosniff',
//     'x-xss-protection': '0',
//     'referrer-policy': 'origin-when-cross-origin, strict-origin-when-cross-origin',
//     'content-security-policy': "default-src 'none'",
//     'content-encoding': 'gzip',
//     server: 'github.com',
//     'accept-ranges': 'bytes',
//     'x-ratelimit-limit': '60',
//     'x-ratelimit-remaining': '57',
//     'x-ratelimit-reset': '1744455214',
//     'x-ratelimit-resource': 'core',
//     'x-ratelimit-used': '3',
//     'transfer-encoding': 'chunked',
//     'x-github-request-id': 'AFDE:B8BC:43F3AA:54204E:67FA3F85'  
//   },
//   body: ReadableStream { locked: false, state: 'readable', supportsBYOB: true },
//   bodyUsed: false,
//   ok: true,
//   redirected: false,
//   type: 'basic',
//   url: 'https://api.github.com/users/PrasiddhaBhattarai'       
// }

// turned the JSON to an object

// {
//   login: 'PrasiddhaBhattarai',
//   id: 172280718,
//   node_id: 'U_kgDOCkTLjg',
//   avatar_url: 'https://avatars.githubusercontent.com/u/172280718?v=4',
//   gravatar_id: '',
//   url: 'https://api.github.com/users/PrasiddhaBhattarai',      
//   html_url: 'https://github.com/PrasiddhaBhattarai',
//   followers_url: 'https://api.github.com/users/PrasiddhaBhattarai/followers',
//   following_url: 'https://api.github.com/users/PrasiddhaBhattarai/following{/other_user}',
//   gists_url: 'https://api.github.com/users/PrasiddhaBhattarai/gists{/gist_id}',
//   starred_url: 'https://api.github.com/users/PrasiddhaBhattarai/starred{/owner}{/repo}',
//   subscriptions_url: 'https://api.github.com/users/PrasiddhaBhattarai/subscriptions',
//   organizations_url: 'https://api.github.com/users/PrasiddhaBhattarai/orgs',
//   repos_url: 'https://api.github.com/users/PrasiddhaBhattarai/repos',
//   events_url: 'https://api.github.com/users/PrasiddhaBhattarai/events{/privacy}',
//   received_events_url: 'https://api.github.com/users/PrasiddhaBhattarai/received_events',
//   type: 'User',
//   user_view_type: 'public',
//   site_admin: false,
//   name: 'Prashidha Bhattarai',
//   company: null,
//   blog: '',
//   location: null,
//   email: null,
//   hireable: null,
//   bio: null,
//   twitter_username: null,
//   public_repos: 8,
//   public_gists: 0,
//   followers: 0,
//   following: 0,
//   created_at: '2024-06-10T13:28:23Z',
//   updated_at: '2025-03-06T05:21:39Z'
// }
// 172280718