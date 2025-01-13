export interface Question {
  id: string;
  text: string;
  category: 'economic' | 'social' | 'foreign' | 'domestic';
  weight: {
    republican: number;
    democrat: number;
  };
}

export const questions: Question[] = [
  {
    id: '1',
    text: 'TikTok should be banned in the U.S. to protect national security.',
    category: 'foreign',
    weight: {
      republican: 0.7,
      democrat: -0.6,
    },
  },
  {
    id: '2',
    text: 'OnlyFans creators should pay higher taxes because they’re “self-employed entrepreneurs.”',
    category: 'economic',
    weight: {
      republican: 0.8,
      democrat: -0.8,
    },
  },
  {
    id: '3',
    text: 'Student loans should be forgiven, but only for degrees that actually get people jobs.',
    category: 'economic',
    weight: {
      republican: 0.5,
      democrat: -0.7,
    },
  },
  {
    id: '4',
    text: 'Weed dispensaries should be allowed next to Starbucks because it’s the vibe.',
    category: 'domestic',
    weight: {
      republican: -0.8,
      democrat: 0.9,
    },
  },
  {
    id: '5',
    text: 'AI influencers should be required to disclose their “non-human” status in their content.',
    category: 'social',
    weight: {
      republican: 0.3,
      democrat: -0.4,
    },
  },
  {
    id: '6',
    text: 'Memes should be protected as free speech, even if they’re “problematic.”',
    category: 'social',
    weight: {
      republican: 0.6,
      democrat: -0.5,
    },
  },
  {
    id: '7',
    text: 'America should just buy Greenland because it’s totally on-brand.',
    category: 'foreign',
    weight: {
      republican: 0.7,
      democrat: -0.6,
    },
  },
  {
    id: '8',
    text: 'Gen Z should get free therapy because Boomers ruined the planet.',
    category: 'domestic',
    weight: {
      republican: -0.8,
      democrat: 0.9,
    },
  },
  {
    id: '9',
    text: 'Cancel culture is a necessary tool to hold people accountable.',
    category: 'social',
    weight: {
      republican: -0.7,
      democrat: 0.6,
    },
  },
  {
    id: '10',
    text: 'NFTs should be regulated because they’re basically just digital Beanie Babies.',
    category: 'economic',
    weight: {
      republican: 0.4,
      democrat: -0.5,
    },
  },
  {
    id: '11',
    text: 'The military should use influencers for recruitment campaigns to vibe with Gen Z.',
    category: 'foreign',
    weight: {
      republican: 0.5,
      democrat: -0.6,
    },
  },
  {
    id: '12',
    text: 'Fast food joints should be fined for not offering vegetarian options.',
    category: 'domestic',
    weight: {
      republican: -0.6,
      democrat: 0.8,
    },
  },
  {
    id: '13',
    text: 'People who eat pineapple on pizza should pay higher taxes.',
    category: 'domestic',
    weight: {
      republican: 0.2,
      democrat: -0.2,
    },
  },
  {
    id: '14',
    text: 'Influencers should need a license to promote financial products like crypto.',
    category: 'social',
    weight: {
      republican: 0.4,
      democrat: -0.5,
    },
  },
  {
    id: '15',
    text: 'All public restrooms should be gender-neutral because it’s 2025.',
    category: 'social',
    weight: {
      republican: -0.9,
      democrat: 0.8,
    },
  },
  {
    id: '16',
    text: 'The government should subsidize therapy for everyone who cried during *Avatar: The Way of Water*.',
    category: 'domestic',
    weight: {
      republican: -0.5,
      democrat: 0.6,
    },
  },
  {
    id: '17',
    text: 'Elon Musk should run for president because it would be entertaining.',
    category: 'social',
    weight: {
      republican: 0.7,
      democrat: -0.6,
    },
  },
  {
    id: '18',
    text: 'The Kardashians should be banned from holding any political office.',
    category: 'social',
    weight: {
      republican: 0.5,
      democrat: -0.5,
    },
  },
  {
    id: '19',
    text: 'All public schools should require a class on “How to Make a Viral TikTok.”',
    category: 'domestic',
    weight: {
      republican: -0.6,
      democrat: 0.6,
    },
  },
  {
    id: '20',
    text: 'College majors like “Underwater Basket Weaving” should be banned.',
    category: 'economic',
    weight: {
      republican: 0.8,
      democrat: -0.7,
    },
  },
  {
    id: '21',
    text: 'Streaming platforms should offer free subscriptions to unemployed people.',
    category: 'economic',
    weight: {
      republican: -0.6,
      democrat: 0.7,
    },
  },
  {
    id: '22',
    text: 'Pet owners should get tax breaks for adopting rescue animals.',
    category: 'domestic',
    weight: {
      republican: -0.4,
      democrat: 0.8,
    },
  },
  {
    id: '23',
    text: '“Canceling student loan debt” should also cancel parking ticket debt.',
    category: 'economic',
    weight: {
      republican: -0.5,
      democrat: 0.7,
    },
  },
  {
    id: '24',
    text: 'Twitter (X) should be regulated to prevent billionaires from buying it.',
    category: 'social',
    weight: {
      republican: -0.5,
      democrat: 0.7,
    },
  },
  {
    id: '25',
    text: 'The government should mandate a 4-day work week.',
    category: 'economic',
    weight: {
      republican: -0.6,
      democrat: 0.7,
    },
  },
  {
    id: '26',
    text: 'The internet should be free for everyone because it’s a basic necessity.',
    category: 'domestic',
    weight: {
      republican: -0.7,
      democrat: 0.8,
    },
  },
  {
    id: '27',
    text: 'Clapping after a movie should be illegal.',
    category: 'social',
    weight: {
      republican: 0.3,
      democrat: -0.3,
    },
  },
  {
    id: '28',
    text: 'Reusable straws should be mandatory at all fast food joints.',
    category: 'domestic',
    weight: {
      republican: -0.8,
      democrat: 0.8,
    },
  },
  {
    id: '29',
    text: 'Instagram likes should be regulated to prevent clout-chasing.',
    category: 'social',
    weight: {
      republican: 0.5,
      democrat: -0.5,
    },
  },
  {
    id: '30',
    text: 'Fortnite should be banned for creating lazy gamers.',
    category: 'domestic',
    weight: {
      republican: 0.6,
      democrat: -0.6,
    },
  },
  {
    id: '31',
    text: 'Seasonal pumpkin spice lattes should be a year-round thing.',
    category: 'domestic',
    weight: {
      republican: -0.2,
      democrat: 0.3,
    },
  },
  {
    id: '32',
    text: 'Gen Z should get free tuition because Boomers already had affordable college.',
    category: 'economic',
    weight: {
      republican: -0.7,
      democrat: 0.9,
    },
  },
  {
    id: '33',
    text: 'Cryptocurrency should be banned because it’s ruining the environment.',
    category: 'economic',
    weight: {
      republican: -0.5,
      democrat: 0.7,
    },
  },
  {
    id: '34',
    text: 'Netflix should be required to bring back shows they cancel too soon.',
    category: 'social',
    weight: {
      republican: -0.4,
      democrat: 0.5,
    },
  },
  {
    id: '35',
    text: 'Plastic surgery ads should be banned because they create unrealistic standards.',
    category: 'social',
    weight: {
      republican: -0.5,
      democrat: 0.7,
    },
  },
  {
    id: '36',
    text: 'The government should tax billionaires for every private jet they fly.',
    category: 'economic',
    weight: {
      republican: -0.8,
      democrat: 0.9,
    },
  },
  {
    id: '37',
    text: 'VR concerts should count as real events for tax write-offs.',
    category: 'social',
    weight: {
      republican: 0.3,
      democrat: -0.4,
    },
  },
  {
    id: '38',
    text: 'AI should be banned from making memes because they’re “too cringe.”',
    category: 'social',
    weight: {
      republican: 0.2,
      democrat: -0.3,
    },
  },
  {
    id: '39',
    text: 'Everyone should get a day off work to celebrate Beyoncé’s birthday.',
    category: 'domestic',
    weight: {
      republican: -0.5,
      democrat: 0.7,
    },
  },
  {
    id: '40',
    text: 'UFOs should be declassified because we have a right to know.',
    category: 'foreign',
    weight: {
      republican: 0.6,
      democrat: -0.4,
    },
  },
  {
    id: '41',
    text: 'Every major city should have a dedicated e-sports arena funded by the government.',
    category: 'economic',
    weight: {
      republican: -0.4,
      democrat: 0.5,
    },
  },
  {
    id: '42',
    text: 'Social media platforms should be fined for promoting fake news.',
    category: 'social',
    weight: {
      republican: -0.6,
      democrat: 0.8,
    },
  },
  {
    id: '43',
    text: 'Drivers should be taxed extra for owning gas-powered cars after 2030.',
    category: 'economic',
    weight: {
      republican: -0.9,
      democrat: 0.8,
    },
  },
  {
    id: '44',
    text: 'Schools should replace gym class with mandatory mental health sessions.',
    category: 'domestic',
    weight: {
      republican: -0.7,
      democrat: 0.9,
    },
  },
  {
    id: '45',
    text: 'The government should subsidize TikTok creators who promote fitness and healthy living.',
    category: 'economic',
    weight: {
      republican: -0.6,
      democrat: 0.7,
    },
  },
  {
    id: '46',
    text: 'Streaming all major sports events should be free for everyone.',
    category: 'social',
    weight: {
      republican: -0.4,
      democrat: 0.6,
    },
  },
  {
    id: '47',
    text: 'Food delivery apps should pay a “health impact tax” for promoting fast food.',
    category: 'economic',
    weight: {
      republican: -0.8,
      democrat: 0.7,
    },
  },
  {
    id: '48',
    text: 'Public schools should have a “tech detox” day where phones are banned.',
    category: 'domestic',
    weight: {
      republican: 0.6,
      democrat: -0.6,
    },
  },
  {
    id: '49',
    text: 'AI-generated art should be banned from entering art competitions.',
    category: 'social',
    weight: {
      republican: 0.3,
      democrat: -0.4,
    },
  },
  {
    id: '50',
    text: 'The government should fund universal high-speed internet for rural areas.',
    category: 'economic',
    weight: {
      republican: -0.5,
      democrat: 0.8,
    },
  },
  {
    id: '51',
    text: 'There should be mandatory recycling programs in every household.',
    category: 'domestic',
    weight: {
      republican: -0.7,
      democrat: 0.9,
    },
  },
  {
    id: '52',
    text: 'Virtual influencers should have to disclose if their followers are bots.',
    category: 'social',
    weight: {
      republican: 0.4,
      democrat: -0.5,
    },
  },
  {
    id: '53',
    text: 'The government should ban influencer marketing targeting kids under 13.',
    category: 'domestic',
    weight: {
      republican: -0.6,
      democrat: 0.8,
    },
  },
  {
    id: '54',
    text: 'Electric vehicle (EV) owners should pay a fee for using public charging stations.',
    category: 'economic',
    weight: {
      republican: 0.6,
      democrat: -0.5,
    },
  },
  {
    id: '55',
    text: 'Remote work should be a legal right for jobs that allow it.',
    category: 'economic',
    weight: {
      republican: -0.7,
      democrat: 0.9,
    },
  },
  {
    id: '56',
    text: 'Companies that use unpaid interns should be banned from government contracts.',
    category: 'economic',
    weight: {
      republican: -0.8,
      democrat: 0.7,
    },
  },
  {
    id: '57',
    text: 'Universities should be required to disclose how much alumni earn after graduation.',
    category: 'economic',
    weight: {
      republican: 0.5,
      democrat: -0.6,
    },
  },
  {
    id: '58',
    text: 'There should be a legal age limit for politicians over 75.',
    category: 'domestic',
    weight: {
      republican: 0.6,
      democrat: 0.4,
    },
  },
  {
    id: '59',
    text: 'The U.S. should adopt a national four-day school week to improve student well-being.',
    category: 'domestic',
    weight: {
      republican: -0.6,
      democrat: 0.7,
    },
  },
  {
    id: '60',
    text: 'AI companies should pay royalties to workers whose jobs are replaced by automation.',
    category: 'economic',
    weight: {
      republican: -0.5,
      democrat: 0.8,
    },
  },
];
