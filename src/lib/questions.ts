export interface Question {
  id: string;
  text: string;
  category: 'Economic' | 'Social' | 'Foreign' | 'Domestic';
  weight: {
    republican: number;
    democrat: number;
  };
}

export const questions: Question[] = [
  {
    id: 'E1',
    text: 'OnlyFans creators should pay higher taxes because they’re “self-employed entrepreneurs.”',
    category: 'Economic',
    weight: {
      republican: 0.8,
      democrat: -0.8,
    },
  },
  {
    id: 'E2',
    text: 'Student loans should be forgiven, but only for degrees that actually get people jobs.',
    category: 'Economic',
    weight: {
      republican: 0.5,
      democrat: -0.7,
    },
  },
  {
    id: 'E3',
    text: 'Streaming platforms should offer free subscriptions to unemployed people.',
    category: 'Economic',
    weight: {
      republican: -0.6,
      democrat: 0.7,
    },
  },
  {
    id: 'E4',
    text: 'The government should mandate a 4-day work week.',
    category: 'Economic',
    weight: {
      republican: -0.6,
      democrat: 0.7,
    },
  },
  {
    id: 'E5',
    text: 'Gen Z should get free tuition because Boomers already had affordable college.',
    category: 'Economic',
    weight: {
      republican: -0.7,
      democrat: 0.9,
    },
  },
  {
    id: 'E6',
    text: 'Cryptocurrency should be banned because it’s ruining the environment.',
    category: 'Economic',
    weight: {
      republican: -0.5,
      democrat: 0.7,
    },
  },
  {
    id: 'E7',
    text: 'The government should tax billionaires for every private jet they fly.',
    category: 'Economic',
    weight: {
      republican: -0.8,
      democrat: 0.9,
    },
  },
  {
    id: 'E8',
    text: 'AI companies should pay royalties to workers whose jobs are replaced by automation.',
    category: 'Economic',
    weight: {
      republican: -0.5,
      democrat: 0.8,
    },
  },
  {
    id: 'E9',
    text: 'Universities should be required to disclose how much alumni earn after graduation.',
    category: 'Economic',
    weight: {
      republican: 0.5,
      democrat: -0.6,
    },
  },
  {
    id: 'E10',
    text: 'Electric vehicle (EV) owners should pay a fee for using public charging stations.',
    category: 'Economic',
    weight: {
      republican: 0.6,
      democrat: -0.5,
    },
  },
  {
    id: 'E11',
    text: 'Remote work should be a legal right for jobs that allow it.',
    category: 'Economic',
    weight: {
      republican: -0.7,
      democrat: 0.9,
    },
  },
  {
    id: 'E12',
    text: 'Food delivery apps should pay a “health impact tax” for promoting fast food.',
    category: 'Economic',
    weight: {
      republican: -0.8,
      democrat: 0.7,
    },
  },
  {
    id: 'E13',
    text: 'Every major city should have a dedicated e-sports arena funded by the government.',
    category: 'Economic',
    weight: {
      republican: -0.4,
      democrat: 0.5,
    },
  },
  {
    id: 'E14',
    text: 'Drivers should be taxed extra for owning gas-powered cars after 2030.',
    category: 'Economic',
    weight: {
      republican: -0.9,
      democrat: 0.8,
    },
  },
  {
    id: 'E15',
    text: 'The government should subsidize TikTok creators who promote fitness and healthy living.',
    category: 'Economic',
    weight: {
      republican: -0.6,
      democrat: 0.7,
    },
  },
  {
    id: 'E16',
    text: 'Companies that use unpaid interns should be banned from government contracts.',
    category: 'Economic',
    weight: {
      republican: -0.8,
      democrat: 0.7,
    },
  },
  {
    id: 'E17',
    text: 'The government should fund universal high-speed internet for rural areas.',
    category: 'Economic',
    weight: {
      republican: -0.5,
      democrat: 0.8,
    },
  },
  {
    id: 'E18',
    text: 'NFTs should be regulated because they’re basically just digital Beanie Babies.',
    category: 'Economic',
    weight: {
      republican: 0.4,
      democrat: -0.5,
    },
  },
  {
    id: 'E19',
    text: 'Streaming all major sports events should be free for everyone.',
    category: 'Economic',
    weight: {
      republican: -0.4,
      democrat: 0.6,
    },
  },
  {
    id: 'E20',
    text: 'Plastic surgery ads should be banned because they create unrealistic standards.',
    category: 'Economic',
    weight: {
      republican: -0.5,
      democrat: 0.7,
    },
  },
  {
    id: 'S1',
    text: 'Cancel culture is a necessary tool to hold people accountable.',
    category: 'Social',
    weight: {
      republican: -0.7,
      democrat: 0.6,
    },
  },
  {
    id: 'S2',
    text: 'All public restrooms should be gender-neutral because it’s 2025.',
    category: 'Social',
    weight: {
      republican: -0.9,
      democrat: 0.8,
    },
  },
  {
    id: 'S3',
    text: 'Memes should be protected as free speech, even if they’re “problematic.”',
    category: 'Social',
    weight: {
      republican: 0.6,
      democrat: -0.5,
    },
  },
  {
    id: 'S4',
    text: 'AI influencers should be required to disclose their “non-human” status in their content.',
    category: 'Social',
    weight: {
      republican: 0.3,
      democrat: -0.4,
    },
  },
  {
    id: 'S5',
    text: 'Elon Musk should run for president because it would be entertaining.',
    category: 'Social',
    weight: {
      republican: 0.7,
      democrat: -0.6,
    },
  },
  {
    id: 'S6',
    text: 'The Kardashians should be banned from holding any political office.',
    category: 'Social',
    weight: {
      republican: 0.5,
      democrat: -0.5,
    },
  },
  {
    id: 'S7',
    text: 'Clapping after a movie should be illegal.',
    category: 'Social',
    weight: {
      republican: 0.3,
      democrat: -0.3,
    },
  },
  {
    id: 'S8',
    text: 'Instagram likes should be regulated to prevent clout-chasing.',
    category: 'Social',
    weight: {
      republican: 0.5,
      democrat: -0.5,
    },
  },
  {
    id: 'S9',
    text: 'Virtual influencers should have to disclose if their followers are bots.',
    category: 'Social',
    weight: {
      republican: 0.4,
      democrat: -0.5,
    },
  },
  {
    id: 'S10',
    text: 'AI should be banned from making memes because they’re “too cringe.”',
    category: 'Social',
    weight: {
      republican: 0.2,
      democrat: -0.3,
    },
  },
  {
    id: 'S11',
    text: 'Streaming platforms should create content ratings that penalize problematic creators.',
    category: 'Social',
    weight: {
      republican: -0.4,
      democrat: 0.6,
    },
  },
  {
    id: 'S12',
    text: 'Plastic surgery ads should be banned for promoting unrealistic beauty standards.',
    category: 'Social',
    weight: {
      republican: -0.5,
      democrat: 0.7,
    },
  },
  {
    id: 'S13',
    text: 'Social media companies should remove content that “offends” public figures.',
    category: 'Social',
    weight: {
      republican: -0.6,
      democrat: 0.6,
    },
  },
  {
    id: 'S14',
    text: 'Influencers should face higher penalties for false product advertisements.',
    category: 'Social',
    weight: {
      republican: 0.3,
      democrat: -0.4,
    },
  },
  {
    id: 'S15',
    text: 'Petitioning through TikTok should be considered a valid political action.',
    category: 'Social',
    weight: {
      republican: -0.4,
      democrat: 0.5,
    },
  },
  {
    id: 'S16',
    text: 'AI voiceovers should be disclosed when used in advertisements.',
    category: 'Social',
    weight: {
      republican: 0.3,
      democrat: -0.3,
    },
  },
  {
    id: 'S17',
    text: 'Celebrities should face tax penalties for excessive luxury spending.',
    category: 'Social',
    weight: {
      republican: -0.7,
      democrat: 0.6,
    },
  },
  {
    id: 'S18',
    text: 'Social media platforms should provide mental health resources to creators.',
    category: 'Social',
    weight: {
      republican: -0.5,
      democrat: 0.8,
    },
  },
  {
    id: 'S19',
    text: 'Video games promoting violence should be rated stricter than R-rated movies.',
    category: 'Social',
    weight: {
      republican: 0.6,
      democrat: -0.5,
    },
  },
  {
    id: 'S20',
    text: 'AI art should be prohibited from taking away jobs from human artists.',
    category: 'Social',
    weight: {
      republican: -0.3,
      democrat: 0.4,
    },
  },
  {
    id: 'F1',
    text: 'TikTok should be banned in the U.S. to protect national security.',
    category: 'Foreign',
    weight: {
      republican: 0.7,
      democrat: -0.6,
    },
  },
  {
    id: 'F2',
    text: 'America should just buy Greenland because it’s totally on-brand.',
    category: 'Foreign',
    weight: {
      republican: 0.7,
      democrat: -0.6,
    },
  },
  {
    id: 'F3',
    text: 'The U.S. should increase military spending to stay ahead of global threats.',
    category: 'Foreign',
    weight: {
      republican: 0.9,
      democrat: -0.8,
    },
  },
  {
    id: 'F4',
    text: 'Foreign aid should be reduced and redirected to domestic issues.',
    category: 'Foreign',
    weight: {
      republican: 0.8,
      democrat: -0.7,
    },
  },
  {
    id: 'F5',
    text: 'The military should use influencers for recruitment campaigns to vibe with Gen Z.',
    category: 'Foreign',
    weight: {
      republican: 0.5,
      democrat: -0.6,
    },
  },
  {
    id: 'F6',
    text: 'UFOs should be declassified because we have a right to know.',
    category: 'Foreign',
    weight: {
      republican: 0.6,
      democrat: -0.4,
    },
  },
  {
    id: 'F7',
    text: 'The U.S. should adopt stricter immigration policies to protect jobs.',
    category: 'Foreign',
    weight: {
      republican: 0.8,
      democrat: -0.8,
    },
  },
  {
    id: 'F8',
    text: 'The United States should ban trade with countries that violate human rights.',
    category: 'Foreign',
    weight: {
      republican: -0.6,
      democrat: 0.7,
    },
  },
  {
    id: 'F9',
    text: 'NATO allies should contribute more money to the alliance.',
    category: 'Foreign',
    weight: {
      republican: 0.7,
      democrat: -0.5,
    },
  },
  {
    id: 'F10',
    text: 'The U.S. should end all involvement in Middle Eastern conflicts.',
    category: 'Foreign',
    weight: {
      republican: -0.7,
      democrat: 0.6,
    },
  },
  {
    id: 'F11',
    text: 'Global corporations should face stricter U.S. taxes to prevent outsourcing.',
    category: 'Foreign',
    weight: {
      republican: -0.6,
      democrat: 0.8,
    },
  },
  {
    id: 'F12',
    text: 'The United States should ban foreign ownership of critical infrastructure.',
    category: 'Foreign',
    weight: {
      republican: 0.8,
      democrat: -0.7,
    },
  },
  {
    id: 'F13',
    text: 'The U.S. should implement tariffs to protect American-made goods.',
    category: 'Foreign',
    weight: {
      republican: 0.7,
      democrat: -0.6,
    },
  },
  {
    id: 'F14',
    text: 'The U.S. should prioritize funding the United Nations over military alliances.',
    category: 'Foreign',
    weight: {
      republican: -0.7,
      democrat: 0.8,
    },
  },
  {
    id: 'F15',
    text: 'Refugees fleeing war zones should have priority for U.S. entry.',
    category: 'Foreign',
    weight: {
      republican: -0.6,
      democrat: 0.7,
    },
  },
  {
    id: 'F16',
    text: 'The United States should reduce its nuclear arsenal to promote peace.',
    category: 'Foreign',
    weight: {
      republican: -0.8,
      democrat: 0.8,
    },
  },
  {
    id: 'F17',
    text: 'The U.S. should invest in green energy to reduce global dependence on oil.',
    category: 'Foreign',
    weight: {
      republican: -0.6,
      democrat: 0.9,
    },
  },
  {
    id: 'F18',
    text: 'Foreign tourists should pay higher fees for entry to U.S. national parks.',
    category: 'Foreign',
    weight: {
      republican: 0.4,
      democrat: -0.3,
    },
  },
  {
    id: 'F19',
    text: 'The U.S. should increase cyber defense spending to counter foreign hackers.',
    category: 'Foreign',
    weight: {
      republican: 0.8,
      democrat: -0.7,
    },
  },
  {
    id: 'F20',
    text: 'The U.S. should impose sanctions on countries with unfair trade practices.',
    category: 'Foreign',
    weight: {
      republican: 0.6,
      democrat: -0.5,
    },
  },
  {
    id: 'D1',
    text: 'Weed dispensaries should be allowed next to Starbucks because it’s the vibe.',
    category: 'Domestic',
    weight: {
      republican: -0.8,
      democrat: 0.9,
    },
  },
  {
    id: 'D2',
    text: 'Gen Z should get free therapy because Boomers ruined the planet.',
    category: 'Domestic',
    weight: {
      republican: -0.8,
      democrat: 0.9,
    },
  },
  {
    id: 'D3',
    text: 'Fast food joints should be fined for not offering vegetarian options.',
    category: 'Domestic',
    weight: {
      republican: -0.6,
      democrat: 0.8,
    },
  },
  {
    id: 'D4',
    text: 'People who eat pineapple on pizza should pay higher taxes.',
    category: 'Domestic',
    weight: {
      republican: 0.2,
      democrat: -0.2,
    },
  },
  {
    id: 'D5',
    text: 'All public schools should require a class on “How to Make a Viral TikTok.”',
    category: 'Domestic',
    weight: {
      republican: -0.6,
      democrat: 0.6,
    },
  },
  {
    id: 'D6',
    text: 'Seasonal pumpkin spice lattes should be a year-round thing.',
    category: 'Domestic',
    weight: {
      republican: -0.2,
      democrat: 0.3,
    },
  },
  {
    id: 'D7',
    text: 'The internet should be free for everyone because it’s a basic necessity.',
    category: 'Domestic',
    weight: {
      republican: -0.7,
      democrat: 0.8,
    },
  },
  {
    id: 'D8',
    text: 'Reusable straws should be mandatory at all fast food joints.',
    category: 'Domestic',
    weight: {
      republican: -0.8,
      democrat: 0.8,
    },
  },
  {
    id: 'D9',
    text: 'Fortnite should be banned for creating lazy gamers.',
    category: 'Domestic',
    weight: {
      republican: 0.6,
      democrat: -0.6,
    },
  },
  {
    id: 'D10',
    text: 'Schools should replace gym class with mandatory mental health sessions.',
    category: 'Domestic',
    weight: {
      republican: -0.7,
      democrat: 0.9,
    },
  },
  {
    id: 'D11',
    text: 'There should be a legal age limit for politicians over 75.',
    category: 'Domestic',
    weight: {
      republican: 0.6,
      democrat: 0.4,
    },
  },
  {
    id: 'D12',
    text: 'Public schools should have a “tech detox” day where phones are banned.',
    category: 'Domestic',
    weight: {
      republican: 0.6,
      democrat: -0.6,
    },
  },
  {
    id: 'D13',
    text: 'Pet owners should get tax breaks for adopting rescue animals.',
    category: 'Domestic',
    weight: {
      republican: -0.4,
      democrat: 0.8,
    },
  },
  {
    id: 'D14',
    text: 'Everyone should get a day off work to celebrate Beyoncé’s birthday.',
    category: 'Domestic',
    weight: {
      republican: -0.5,
      democrat: 0.7,
    },
  },
  {
    id: 'D15',
    text: 'Public restrooms should be monitored for security purposes to prevent vandalism.',
    category: 'Domestic',
    weight: {
      republican: 0.5,
      democrat: -0.6,
    },
  },
  {
    id: 'D16',
    text: 'Reusable bags should be mandatory at grocery stores nationwide.',
    category: 'Domestic',
    weight: {
      republican: -0.7,
      democrat: 0.8,
    },
  },
  {
    id: 'D17',
    text: 'Public parks should have free Wi-Fi to encourage people to spend more time outdoors.',
    category: 'Domestic',
    weight: {
      republican: -0.6,
      democrat: 0.7,
    },
  },
  {
    id: 'D18',
    text: 'Homeowners should receive tax credits for using solar panels.',
    category: 'Domestic',
    weight: {
      republican: -0.6,
      democrat: 0.8,
    },
  },
  {
    id: 'D19',
    text: 'Fireworks should be banned in residential areas for safety reasons.',
    category: 'Domestic',
    weight: {
      republican: 0.4,
      democrat: -0.5,
    },
  },
  {
    id: 'D20',
    text: 'Mandatory voting laws should be introduced to increase civic participation.',
    category: 'Domestic',
    weight: {
      republican: -0.7,
      democrat: 0.9,
    },
  },
];
