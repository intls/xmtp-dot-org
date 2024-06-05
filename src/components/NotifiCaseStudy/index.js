import React from "react";
import useBaseUrl from "@docusaurus/useBaseUrl/";

const NotifiCaseStudy = () => {
  return (
  <div>
    <div class="relative isolate overflow-hidden">
    <div class="absolute inset-0 -z-10 overflow-hidden">
      <svg class="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]" aria-hidden="true">
        <defs>
          <pattern id="e813992c-7d03-4cc4-a2bd-151760b470a0" width="200" height="200" x="50%" y="-1" patternUnits="userSpaceOnUse">
            <path d="M100 200V.5M.5 .5H200" fill="none" />
          </pattern>
        </defs>
        <svg x="50%" y="-1" class="overflow-visible fill-gray-50">
          <path d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z" stroke-width="0" />
        </svg>
        <rect width="100%" height="100%" stroke-width="0" fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" />
      </svg>
    </div>
      <div class="absolute left-[calc(50%-4rem)] top-10 -z-10 transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:left-48 lg:top-[calc(50%-30rem)] xl:left-[calc(50%-24rem)]" aria-hidden="true">
      </div>
      <div class="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-10">
        <div class="mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-xl lg:pt-8">
          <div class="mt-24 sm:mt-32 lg:mt-16">
            <a class="inline-flex space-x-6">
              <span class="rounded-full bg-red-500/10 px-3 py-1 text-sm font-semibold leading-6 text-red-400 ring-1 ring-inset ring-red-500/20">Case Study</span>
            </a>
          </div>
          <h1 class="mt-6 text-4xl font-bold tracking-tight text-black sm:text-6xl">Notifi uses XMTP to deliver real-time alerts on Coinbase Wallet</h1>
          <p class="mt-6 text-lg leading-8 text-gray-500">Notifi’s integration with XMTP enables DeFi projects like GMX to deliver real-time notifications and critical alerts for traders directly in Coinbase Wallet.</p>
          <div class="mt-10 flex items-center gap-x-6">
            <a class="rounded-md bg-red-500 px-6 py-2.5 text-md font-semibold text-white shadow-sm hover:bg-red-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-400">Get started</a>
          </div>
        </div>
        <div class="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
          <div class="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
            <img src="img/notifiGraphic.png" alt="App screenshot" width="1170" height="740" />
          </div>
        </div>
      </div>
    </div>

    <div class="bg-white py-16">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-3xl lg:text-center">
          <h2 class="text-base font-semibold leading-7 text-red-600 uppercase">Overview</h2>
          <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Helping GMX users trade better</p>
          <p class="mt-6 text-xl leading-8 text-gray-600">GMX is a decentralized exchange focused on spot and perpetual trading on the Arbitrum blockchain. It is the first DEX to partner with Notifi to deliver timely and relevant alerts directly through Coinbase Wallet, reaching over 530,000+ traders in their main inbox. The integration streamlines communication, simplifies engagement with the platform, and ultimately empowers users to make better trading decisions.</p>
        </div>
      </div>
    </div>

    <div class="overflow-hidden bg-white py-24 sm:py-32">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start">
          <div class="lg:pr-4 lg:pt-4">
            <div class="lg:max-w-lg">
              <div class="flex h-10 w-10 items-center justify-center rounded-lg bg-red-600">
                <svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 13.5h3.86a2.25 2.25 0 0 1 2.012 1.244l.256.512a2.25 2.25 0 0 0 2.013 1.244h3.218a2.25 2.25 0 0 0 2.013-1.244l.256-.512a2.25 2.25 0 0 1 2.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 0 0-2.15-1.588H6.911a2.25 2.25 0 0 0-2.15 1.588L2.35 13.177a2.25 2.25 0 0 0-.1.661Z" />
                </svg>
              </div>
              <p class="mt-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Personalization with privacy</p>
              <p class="mt-6 text-lg leading-8 text-gray-600">XMTP’s subscribe functionality makes it easy for dapps like GMX to build subscribers lists, while still maintaining end-user privacy.</p>
              <p class="mt-6 text-lg leading-8 text-gray-600">Users can opt-in to consented messages from anywhere, including gmx.com, apps, or Frames, which XMTP encrypts and stores in an encrypted list on the network. Notifi can then broadcast real-time notifications following user preferences, without knowing any personal identifying information.</p>
              <div class="mt-8">
                <a href="#" class="inline-flex rounded-md bg-red-600 px-6 py-2.5 text-md font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">Get started</a>
              </div>
            </div>
          </div>
          <img src="img/notifiGraphic1.png" alt="Product screenshot" class="max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 md:-ml-4 lg:ml-0" width="640" height="570" />
        </div>
      </div>
    </div>

    <div class="overflow-hidden bg-white py-24 sm:py-32">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div class="lg:ml-auto lg:pl-4 lg:pt-4">
            <div class="lg:max-w-lg">
            <div class="flex h-10 w-10 items-center justify-center rounded-lg bg-red-600">
                <svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
                </svg>
              </div>
              <p class="mt-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Delivering real-time notifications </p>
              <p class="mt-6 text-lg leading-8 text-gray-600">Via Notifi, GMX can segment and send broadcast messages to their list of opt-in users and know that their messages are reaching the user’s main inbox.</p>
              <p class="mt-6 text-lg leading-8 text-gray-600">Starting today, GMX users can receive key notifications, including:</p>
              <dl class="pl-4 my-8 max-w-xl space-y-6 text-base leading-7 text-gray-600 lg:max-w-none">
                <div class="relative pl-12">
                  <dt class="inline font-semibold text-gray-900 text-lg">
                  <svg class="absolute left-1 top-0.5 h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
                  </svg>
                    Trade confirmations and liquidation alerts
                  </dt>
                </div>
                <div class="relative pl-12">
                  <dt class="inline font-semibold text-gray-900 text-lg">
                  <svg class="absolute left-1 top-0.5 h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605" />
                  </svg>
                    Governance updates and price movements
                  </dt>
                </div>
                <div class="relative pl-12">
                  <dt class="inline font-semibold text-gray-900 text-lg">
                  <svg class="absolute left-1 top-0.5 h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 13.5V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 9.75V10.5" />
                  </svg>
                    Customized alerts based on chosen thresholds
                  </dt>
                </div>
              </dl>
              <p class="mt-6 text-lg leading-8 text-gray-600">Coinbase Wallet can trust that these users have given permission to be reached by GMX, and deliver the notifications in the user’s main inbox instead of hiding it in secondary tabs.</p>
            </div>
          </div>
          <div class="lg:order-first">
            <img src="img/notifiGraphic2.png" alt="Product screenshot" class="max-w-none rounded-xl" width="560" height="670" />
          </div>
        </div>
      </div>
    </div>

    <div class="overflow-hidden bg-white py-24 sm:py-32">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-center">
          <div class="lg:pr-4 lg:pt-4">
            <div class="lg:max-w-lg">
              <div class="flex h-10 w-10 items-center justify-center rounded-lg bg-red-600">
                <svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0 0 12 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 0 1-2.031.352 5.988 5.988 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971Zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 0 1-2.031.352 5.989 5.989 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971Z" />
                </svg>
              </div>
              <p class="mt-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">User Protection, Built In.</p>
              <p class="mt-6 text-lg leading-8 text-gray-600">On XMTP, users’ preferences to allow or block an address are stored in an encrypted list on the network. This list is controlled by the user and is respected by every app the user signs into.</p>
              <p class="mt-6 text-lg leading-8 text-gray-600">After being granted access, inbox apps verify if a user has allowed or denied to receive messages from senders, and save these preferences in their app. Only if a user has allowed a specific address will that address be able to reach the main inbox.  All other messages end up in the inbox’s requests tab.</p>
              <div class="mt-8">
                <a href="#" class="inline-flex rounded-md bg-red-600 px-6 py-2.5 text-md font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">Get started</a>
              </div>
            </div>
          </div>
          <img src="img/notifiGraphic3.png" alt="Product screenshot" width="407" height="850" />
        </div>
      </div>
    </div>

  </div>
  );
};

export default NotifiCaseStudy;
