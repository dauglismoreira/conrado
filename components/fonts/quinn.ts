import localFont from "next/font/local";

export const quinn = localFont({
  src: [
    {
      path: './Quinn-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: './Quinn-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './Quinn-Semi-Bold.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: './Quinn-Bold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: './Quinn-Extra-Bold.woff2',
      weight: '700',
      style: 'normal',
    }
  ],
})