import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  newpassword: Yup.string()
    .min(8, "Password must be at least 8 characters long")
    .test(
      "lowercase",
      "Password must contain at least one lowercase character",
      (value) => /[a-z]/.test(value ?? "")
    )
    .test(
      "uppercase",
      "Password must contain at least one uppercase character",
      (value) => /[A-Z]/.test(value ?? "")
    )
    .test("number", "Password must contain at least one number", (value) =>
      /[0-9]/.test(value ?? "")
    )
    .test(
      "whitespace",
      "Password must not contain whitespace",
      (value) => !/\s/.test(value ?? "")
    )
    .required("New password is required"),
});

export const dataSocials = [
  {
    id: 0,
    item: "",
  },
  {
    id: 1,
    item: "Discord",
  },
  {
    id: 2,
    item: "Flickr",
  },
  {
    id: 3,
    item: "Foursquare",
  },
  {
    id: 4,
    item: "GitHub",
  },
  {
    id: 5,
    item: "LinkedIn",
  },
  {
    id: 6,
    item: "Meetup",
  },
  {
    id: 7,
    item: "Pinterest",
  },
  {
    id: 8,
    item: "Quora",
  },
  {
    id: 9,
    item: "Reddit",
  },
  {
    id: 10,
    item: "Snapchat",
  },
  {
    id: 11,
    item: "SoundCloud",
  },
  {
    id: 12,
    item: "TikTok",
  },
  {
    id: 13,
    item: "Tumblr",
  },
  {
    id: 14,
    item: "Twitch",
  },
  {
    id: 15,
    item: "Vimeo",
  },
  {
    id: 16,
    item: "VK",
  },
  {
    id: 17,
    item: "WeChat",
  },
  {
    id: 18,
    item: "WhatsApp",
  },
  {
    id: 19,
    item: "Xbox Live",
  },
  {
    id: 20,
    item: "YouTube",
  },
];

export const socialsData = [
  {
    name: "Facebook",
    sub: "facebook",
  },
  {
    name: "Twitter",
    sub: "twitter",
  },
  {
    name: "Instagram",
    sub: "instagram",
  },
  {
    name: "Telegram",
    sub: "telegram",
  },
  {
    name: "Website",
    sub: "website",
  },
];