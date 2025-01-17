import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://okv-tunes.vercel.app";
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${baseUrl}/chart`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/artists`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/playlist/trending-today-110858205`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/playlist/new-fresh-tunes-6689255`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/playlist/new-fresh-tunes-6689255`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.8,
    },

    {
      url: `${baseUrl}/playlist/top-hindi-songs-946682072`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/playlist/dumdaar-hits-49`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/playlist/love-songs-hindi-1139074020`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/playlist/new-release-hindi-1210453303`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/playlist/new-release-english-85481065`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/playlist/new-pop-hits-hindi-1219707147`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/playlist/new-bhojpuri-tunes-5865896`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/playlist/new-pubjabi-tunes-218822376`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/playlist/new-haryanvi-tunes-817649101`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/playlist/new-tamil-song-10763385`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/playlist/new-telgu-song-2912846`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/playlist/top-50-superhits-india-1134548194`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/playlist/top-viral-hindi-hits-158220028`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/playlist/top-50-hindi-chartbusters-1219706044`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/playlist/top-50-english-songs-1134595537`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/playlist/top-50-superhits-punjabi-1134543511`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/playlist/top-50-superhits-tamil-1134651042`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/playlist/top-50-superhits-telgu-1134643225`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.8,
    },

    {
      url: `${baseUrl}/artists/arijit-singh-459320`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/artists/jubin-nautiyal-881158`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/artists/justin-bieber-568565`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/artists/atif-aslam-459633`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/artists/diljit-dosanjh-468245`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/artists/yo-yo-honey-singh-485956`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/artists/badshah-456863`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/artists/nucleya-510237`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/artists/sonu-nigam-455125`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/artists/lata-mangeshkar-455109`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.64,
    },
    {
      url: `${baseUrl}/artists/ed-sheeran-578407`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.64,
    },
    {
      url: `${baseUrl}/artists/shreya-ghoshal-455130`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.64,
    },
    {
      url: `${baseUrl}/artists/sanam-puri-674886`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.64,
    },
    {
      url: `${baseUrl}/artists/raftaar-458918`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.64,
    },
    {
      url: `${baseUrl}/artists/himesh-reshammiya-455132`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.64,
    },
    {
      url: `${baseUrl}/artists/armaan-malik-464656`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.64,
    },
    {
      url: `${baseUrl}/artists/shah-rukh-khan-461361`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.64,
    },
    {
      url: `${baseUrl}/artists/deepika-padukone-457931`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.64,
    },
    {
      url: `${baseUrl}/artists/salman-khan-459696`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.64,
    },
    {
      url: `${baseUrl}/artists/varun-dhawan-511656`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.64,
    },
    {
      url: `${baseUrl}/artists/alia-bhatt-511658`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.64,
    },
    {
      url: `${baseUrl}/artists/ranbir-kapoor-459632`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.64,
    },
    {
      url: `${baseUrl}/artists/anushka-sharma-462795`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.64,
    },
    {
      url: `${baseUrl}/artists/shahid-kapoor-455778`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.64,
    },
    {
      url: `${baseUrl}/artists/sunny-leone-531934`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.64,
    },
    {
      url: `${baseUrl}/artists/allu-arjun-458135`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.64,
    },
    {
      url: `${baseUrl}/artists/rajinikanth-457969`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.64,
    },
    {
      url: `${baseUrl}/artists/amitabh-bachchan-456117`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.64,
    },
    {
      url: `${baseUrl}/artists/priyanka-chopra-455785`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.64,
    },
    {
      url: `${baseUrl}/artists/katrina-kaif-459631`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.64,
    },
    {
      url: `${baseUrl}/artists/vijay-456196`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.64,
    },
  ];
}
