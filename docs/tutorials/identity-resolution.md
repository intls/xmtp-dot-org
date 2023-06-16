---
sidebar_label: Identity resolution
sidebar_position: 3
---

# Resolve identities in your app

When you build with XMTP, there’s no cold start for your app and your users. As soon as your app plugs into the XMTP network, it's able to reach today’s most popular and meaningful identities.

XMTP’s interoperability and composability help ensure that the network can continue to grow and bring messaging to every identity—via your app.

In this context, **identity** refers to:

- Wallet addresses, such as raw 0x addresses like `0x4b70d04124c2996De29e0caa050A49822Faec6Cc`
- Human-readable domain names associated with wallet addresses. These domain names are provided by name services, such as Ethereum Name Service (ENS) and Unstoppable Domains (UNS).

As a UX best practice, build your app to enable a user to enter a domain name in the To field and have it resolve to its associated raw wallet address.

For example, a user should be able to enter `prxshant.eth` in your To field and have your app forward-resolve and display its associated wallet address `0x4b70d04124c2996De29e0caa050A49822Faec6Cc`.

![Entering prxshant.eth in a to field and having it resolve to 0x4b70d04124c2996De29e0caa050A49822Faec6Cc](img/id-resolution.gif)

And certainly, your app should also be able to accept a raw wallet address and reverse-resolve and display the associated domain name, if available.

## Resolve identities using the Everyname API

To resolve identities in your app, consider using [Everyname](https://www.everyname.xyz/), which provides forward and reverse identity resolution for many name services.

### Forward resolution using Everyname

For forward resolution, send a GET request with a domain name, or handle. For example:

```jsx
import {} from "dotenv/config";
import axios from "axios";

const handle = "fabri.lens";
let config = {
  method: "get",
  maxBodyLength: Infinity,
  url: `https://api.everyname.xyz/forward?domain=${handle}`,
  headers: {
    Accept: "application/json",
    "api-key": process.env.EVERYNAME_KEY,
  },
};
axios
  .request(config)
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.log(error);
  });
```

The response provides the associated wallet address. For example:

```jsx
{
  success: true,
  address: '0x7E0b0363404751346930AF92C80D1fef932Cc48a',
  tldUrl: 'https://lens.xyz',
  tld: '.lens'
}
```

### Reverse resolution using Everyname

For reverse resolution, send a GET request with a wallet address and network. For example:

```jsx
import {} from "dotenv/config";
import axios from "axios";

const axios = require("axios");
let config = {
  method: "get",
  maxBodyLength: Infinity,
  url: "https://api.everyname.xyz/reverse?address=0x7E0b0363404751346930AF92C80D1fef932Cc48a&network=lens",
  headers: {
    Accept: "application/json",
    "api-key": "process.env.EVERYNAME_KEY",
  },
};
axios
  .request(config)
  .then((response) => {
    console.log(JSON.stringify(response.data));
  })
  .catch((error) => {
    console.log(error);
  });
```

The response provides the associated domain name, if available. For example:

```jsx
{
  "success": true,
  "provider": "lens",
  "tldUrl": "https://lens.xyz",
  "name": "fabri.lens"
}
```

To learn more about Everyname, see [Introduction](https://docs.everyname.xyz/api/introduction).

To learn about wallet addresses and chains that are compatible with XMTP, see [Chains](/docs/dev-faqs#chains).

To learn about name services, or decentralized IDs, that work with XMTP, see [Decentralized identifiers](/docs/dev-faqs#decentralized-identifiers).

## Resolve Unstoppable Domains

[Unstoppable Domains](https://unstoppabledomains.com/) offer blockchain-based domains. These domains simplify cryptocurrency transactions, enable easier user logins for dApps, games, and metaverses. They also provide a way to create and host censorship-resistant websites.

Once an Unstoppable Domain is minted on the blockchain, it belongs to the user forever without any renewal fees. 

Use this tutorial to learn how to add Unstoppable Domain support to your app built with XMTP.

### Prerequisites

This tutorial requires that you have the following prerequisites in place:

- An XMTP empowered app built with the [XMTP client SDK for JavaScript](https://github.com/xmtp/xmtp-js)
- Add the Unstoppable Domains SDK

```jsx
npm i --save @unstoppabledomains/resolution
```

Instantiate the library using your own RPC, such as Infura. Create a `resolution` variable that you will use many times across the app.

```jsx
// Importing the Resolution library from @unstoppabledomains/resolution
// This library allows you to interact with blockchain domains
import Resolution from "@unstoppabledomains/resolution";

// Create a new instance of the Resolution class
// It is configured to work with two Ethereum networks: Mainnet and Polygon Mainnet.
// The URLs for connecting to these networks are provided by Infura and are secured using the infuraKey.
const resolution = new Resolution({
  sourceConfig: {
    uns: {
      locations: {
        Layer1: {
          url: `https://mainnet.infura.io/v3/${infuraKey}`,
          network: "mainnet",
        },
        Layer2: {
          url: `https://polygon-mainnet.infura.io/v3/${infuraKey}`,
          network: "polygon-mainnet",
        },
      },
    },
  },
});
```

### Resolve user inputs

When building with XMTP, you need to provide a way to initiate a conversation between the sender and the recipient's wallet addresses. As suggested above, include an "Enter a Wallet Address" field. It's important to validate user input to check if it's a valid Unstoppable Domain. If it is, you can resolve it.

To check if the input is a valid Unstoppable Domain, use the `.isSupportedDomain` function within the library.

```jsx
const valid = await resolution.isSupportedDomain(name);
```

If an async call is not possible in the current implementation, hardcoded values can be used but must be kept updated. Using the supported Unstoppable Domains at the time of writing, an example could look like this:

```jsx
// This is a list of allowed Unstoppable Domains (UNS) domain suffixes.
// A domain is only considered valid if it ends with one of these suffixes.
export const ALLOWED_UNS_SUFFIXES = [
  ".crypto",
  ".bitcoin",
  ".blockchain",
  ".dao",
  ".nft",
  ".888",
  ".wallet",
  ".x",
  ".klever",
  ".zil",
  ".hi",
  ".kresus",
  ".polygon",
  ".anime",
  ".manga",
  ".binanceus",
];

// Function to check if a given address is a valid Unstoppable Domain (UNS) address.
// A valid UNS address must contain a dot and must end with one of the allowed suffixes.
export const isUnsAddress = (address: string): boolean => {
  // If the address is an empty string or does not contain any dots, return false immediately.
  if (!address || !address.includes(".")) {
    return false;
  }
  // Check if the address ends with any of the allowed suffixes.
  // If it does, return true; otherwise, return false.
  return ALLOWED_UNS_SUFFIXes.some((suffix) => address.endsWith(suffix));
};
```

If the input is valid, you can resolve the name for the associated ETH address using the example `fetchUnsAddress` function below.

```jsx
const domain = await resolution.addr(name, "ETH");
//If there is no address associated with the domain or the domain is not valid, the above functions will return null or false respectively.
```

![CleanShot 2023-06-04 at 19.29.24@2x.png](img/uns-img1.png)

### Reverse resolve wallet addresses

To complete the Unstoppable Domains integration, it’s important to convert the wallet addresses on the page into their respective domains. Using the [XMTP.chat](https://xmtp.chat/inbox) inbox as an example, you'll want to reverse resolve the connected wallet address as well as the message previews.

![CleanShot 2023-06-04 at 19.30.56@2x.png](img/uns-img2.png)

To do this, implement a function similar to the one below which will attempt to resolve the wallet address to a domain. Display the wallet address if the function returns null, otherwise display the domain.

```jsx
const domain = await resolution.reverse(address);
```

To achieve this for the message previews, iterate through the existing list of conversations and resolve each one individually.

### Performance

An optional step to limit calls to your RPC is to cache the above results into local storage. To do this, implement a function similar to the below hook, which will both set and get a storage item based on their respective key. On error, it will fallback to the default value you set during the function call.

Here is an example of tying everything together for a **React app** message preview:

```jsx
// Importing hooks from React
import { useEffect, useState } from "react";

// This is a custom React hook that wraps around LocalStorage functionalities
// It allows you to store, retrieve and manipulate a piece of data in LocalStorage
// in a react way (i.e., using state and effects)
export const useLocalStorage = (
  key: string | undefined, // The key of the item to be saved in the LocalStorage
  defaultValue: string | null // The default value to be used when the value of the given key is not found
) => {
  // Initializing the state with the value from LocalStorage or the default value
  const [value, setValue] = useState(() => {
    let currentValue;

    try {
      // Trying to parse the JSON value of the item in the LocalStorage
      currentValue = JSON.parse(
        localStorage.getItem(key || "") || String(defaultValue)
      );
    } catch (error) {
      // If an error occurred (probably due to invalid JSON), the default value is used
      currentValue = defaultValue;
    }

    return currentValue;
  });

  // This useEffect hook saves the current value to LocalStorage every time it changes
  useEffect(() => {
    localStorage.setItem(key || "", JSON.stringify(value));
  }, [value, key]);

  // The state and the setter function are returned so they can be used by the caller
  return [value, setValue];
};

// Using the custom hook to manage the username preview
// The key is the peer address and the default value is an empty string
const [previewUnsName, setPreviewUnsName] = useLocalStorage(
  convo?.peerAddress,
  ""
);

// This effect hook checks whether the peer address is valid and the username preview is empty
// If both conditions are met, it fetches the username from the UNS and sets it
useEffect(() => {
  const getUns = async () => {
    if (isValidWalletAddress(convo?.peerAddress) && previewUnsName === "") {
      const name = await fetchUnsName(convo?.peerAddress);
      // If a name was fetched successfully, it is used; otherwise, null is set
      name ? setPreviewUnsName(name) : setPreviewUnsName(null);
    }
  };

  // The function is called immediately
  getUns();
}, [convo?.peerAddress]); // This effect runs every time the peer address changes
```

### Learn more

To learn more about building with Unstoppable Domains, see the Unstoppable Domains [Developer Portal](https://docs.unstoppabledomains.com/).