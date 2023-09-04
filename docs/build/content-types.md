---
sidebar_label: Content types
sidebar_position: 7
---

# Content types with XMTP

When you build an app with XMTP, all messages are encoded with a content type to ensure that an XMTP client knows how to encode and decode messages, ensuring interoperability and consistent display of messages across apps.

In addition, message payloads are transported as a set of bytes. This means that payloads can carry any content type that a client supports, such as plain text, JSON, or even non-text binary or media content.

At a high level, there are three categories of content types with XMTP:

- Standard
- Standards-track
- Custom

#### Experimental playground 🎲

To explore implementations of standard and standards-track content types, see the XMTP React playground:

[GitHub repo](https://github.com/xmtp/xmtp-react-playground) | [Web app](https://xmtp.github.io/xmtp-react-playground/#/new)

## Standard content types

A standard content type is one that has undergone the XMTP Request for Comment (XRC) process and has been adopted as an [XMTP Improvement Proposal](https://github.com/xmtp/XIPs#readme) (XIP).

Once adopted, a standard content type is bundled in XMTP client SDKs. A developer can then import the standard content type from an SDK for use in their app.

Here are the current standard content types:

### [Text content type](/docs/content-types/plain-text)

  An app built with XMTP uses the `TextCodec` (plain text) standard content type by default. This means that if your app is sending plain text messages only, you don’t need to perform any additional steps related to content types.

### [Composite content type](/docs/content-types/composite)

  If you want your app to be able to send multiple content types; such as any combination of plain text, images, audio, and video; in a single message, you must set up your app to use the `CompositeCodec` standard content type.

## Standards-track content types

A standards-track content type is one that is being actively reviewed for adoption as a standard content type through the XIP process.

Here are standards-track content types that you can review, test, and adopt in your app today:

### Attachment content type

Use to send an attachment smaller than 1MB using the `AttachmentCodec`. The codec automatically encrypts the attachment and uploads it to the XMTP network.

- [Read the doc](/docs/content-types/attachment)
- [Comment on the XIP](https://github.com/xmtp/XIPs/blob/main/XIPs/xip-15-attachment-content-type.md)
- SDK support: [React](https://github.com/xmtp/xmtp-web/tree/8a248eab168eba494909d7215cffba9d50c1f87c/packages/react-sdk/src/helpers/caching/contentTypes), [Kotlin](https://github.com/xmtp/xmtp-android/tree/main/library/src/main/java/org/xmtp/android/library/codecs), [Swift](https://github.com/xmtp/xmtp-ios/tree/main/Sources/XMTP/Codecs)
- Implemented in: Converse, Lenster

### Remote attachment content type

Use to send a remote attachment of any size using the `RemoteAttachmentCodec` and a storage provider.

- [Read the doc](/docs/content-types/remote-attachment)
- [Comment on the XIP](https://github.com/xmtp/XIPs/blob/main/XIPs/xip-17-remote-attachment-content-type-proposal.md)
- SDK support: [JavaScript](https://github.com/xmtp/xmtp-js-content-types/tree/363e82c894f5a4436c5617b1c0424bab574b27c0/packages), [Kotlin](https://github.com/xmtp/xmtp-android/tree/main/library/src/main/java/org/xmtp/android/library/codecs), [Swift](https://github.com/xmtp/xmtp-ios/tree/main/Sources/XMTP/Codecs)

### Read receipt content type

Use to send a read receipt, which is a `timestamp` that indicates when a message was read. The read receipt is sent as a message and you can use it to calculate the time since the last message was read.

- [Read the doc](/docs/content-types/read-receipt)
- [Comment on the XIP idea](https://github.com/orgs/xmtp/discussions/43)
- SDK support: [React](https://github.com/xmtp/xmtp-web/tree/8a248eab168eba494909d7215cffba9d50c1f87c/packages/react-sdk/src/helpers/caching/contentTypes), [JavaScript](https://github.com/xmtp/xmtp-js-content-types/tree/363e82c894f5a4436c5617b1c0424bab574b27c0/packages), [Kotlin](https://github.com/xmtp/xmtp-android/tree/main/library/src/main/java/org/xmtp/android/library/codecs), [Swift](https://github.com/xmtp/xmtp-ios/tree/main/Sources/XMTP/Codecs)

### Reaction content type

Use a reaction to send a quick and often emoji-based way to respond to a message. Reactions are usually limited to a predefined set of emojis or symbols provided by the messaging app.

- [Read the doc](/docs/content-types/reaction)
- [Comment on the XIP idea](https://github.com/orgs/xmtp/discussions/36)
- SDK support: [React](https://github.com/xmtp/xmtp-web/tree/8a248eab168eba494909d7215cffba9d50c1f87c/packages/react-sdk/src/helpers/caching/contentTypes), [JavaScript](https://github.com/xmtp/xmtp-js-content-types/tree/363e82c894f5a4436c5617b1c0424bab574b27c0/packages), [Kotlin](https://github.com/xmtp/xmtp-android/tree/main/library/src/main/java/org/xmtp/android/library/codecs), [Swift](https://github.com/xmtp/xmtp-ios/tree/main/Sources/XMTP/Codecs)
- Implemented in: Converse

### Reply content type

Use a reply to send a direct response to a specific message in a conversation. Users can select and reply to a particular message instead of sending a new one.

- [Read the doc](/docs/content-types/reply)
- [Comment on the XIP idea](https://github.com/orgs/xmtp/discussions/35)
- SDK support: [React](https://github.com/xmtp/xmtp-web/tree/8a248eab168eba494909d7215cffba9d50c1f87c/packages/react-sdk/src/helpers/caching/contentTypes), [JavaScript](https://github.com/xmtp/xmtp-js-content-types/tree/363e82c894f5a4436c5617b1c0424bab574b27c0/packages), [Kotlin](https://github.com/xmtp/xmtp-android/tree/main/library/src/main/java/org/xmtp/android/library/codecs), [Swift](https://github.com/xmtp/xmtp-ios/tree/main/Sources/XMTP/Codecs)

### On-chain transaction reference content type

Use to send references to on-chain transactions, such as crypto payments.

- [Comment on the XIP idea](https://github.com/orgs/xmtp/discussions/37)
- Implemented in: Coinbase Wallet

## Create a custom content type

Any developer building with XMTP can create a custom content type and immediately start using it in their app. Unlike a standard content type, use of a custom content type doesn't require prerequisite formal adoption through the XRC and XIP processes.

For example, if you need a content type that isn't covered by a standard or standards-track content type, you can create a custom content type and begin using it immediately in your app.

:::caution

Your custom content type WILL NOT automatically be supported by other apps and will display fallback text in them instead.

:::

If another app wants to display your custom content type, they must implement your custom content type in their code exactly as it's defined in your code.

Fallback plain text is "alt text"-like description text that you can associate with a custom content type if you are concerned that a receiving app might not be able to handle the content. If the receiving app is unable to handle the custom content, it displays the fallback plain text instead.

Here are tutorials you can use to learn how to create custom content types:

### [Basic: Multiply a number](/docs/content-types/custom)

  Create a custom content type used to multiply numbers.

### [Advanced: Send a Polygon transaction](/docs/content-types/custom-advanced)

  Create a custom content type used to send transaction hashes on the Polygon blockchain.

## Handle an unsupported content type error

As more [custom](#create-a-custom-content-type) and [standards-track](#standards-track-content-types) content types enter the XMTP ecosystem, your app might receive a content type your app doesn't support. This error could crash your app.

To avoid this, code your app to detect, log, and handle the error. For example:

```jsx
const codec = xmtp.codecFor(content.contentType);
if (!codec) {
  const fallback = `missing codec for content type "${content.contentType.toString()}"`;
  throw new Error(fallback);
}
```