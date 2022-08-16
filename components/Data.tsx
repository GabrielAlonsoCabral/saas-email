import {
  ChartBarIcon,
  AdjustmentsIcon,
  CodeIcon,
  InboxInIcon,
  OfficeBuildingIcon,
  AtSymbolIcon,
} from '@heroicons/react/outline'

import benefitOneImg from '../public/img/computing.png'
import benefitTwoImg from '../public/img/startupmeet.png'

const benefitOne = {
  title: 'Powerful sending infrastructure',
  desc: 'Easy SMTP integration and a simple, RESTful API abstracts away the messy details of sending transactional or bulk email. Scale quickly, whether you need to send 10 or 10 million emails.',
  image: benefitOneImg,
  bullets: [
    {
      title: 'Integration made easy',
      desc: 'Citizens Email API makes integrating email into your existing applications incredibly easy with our RESTFUL API.',
      icon: <CodeIcon />,
    },
    {
      title: 'Analytics you can dive into',
      desc: 'You can track the journey your email takes to the inbox with log retention.',
      icon: <ChartBarIcon />,
    },
    {
      title: 'Send emails to the inbox',
      desc: 'With Citizens Email API, companies are empowered to send their emails straight to the inbox.',
      icon: <InboxInIcon />,
    },
  ],
}

const benefitTwo = {
  title: 'Managed email delivery for high-volume senders',
  desc: 'Sending millions of emails a month requires an extra level of diligence to achieve and maintain optimal deliverability and performance.',
  image: benefitTwoImg,
  bullets: [
    {
      title: 'Your Dedicated Contact',
      desc: 'Our Technical Account Managers are here to help you optimize your email programs for better results.',
      icon: <OfficeBuildingIcon />,
    },
    {
      title: 'Build a Custom Deliverability Strategy',
      desc: 'Will assess the current state of your email strategy and infrastructure and advise you on how to build out a deliverability strategy custom to your business.',
      icon: <AdjustmentsIcon />,
    },
    {
      title: 'Email Performance & Proactive Reputation Monitoring',
      desc: 'Spend less time monitoring your reputation and email performance by having an expert proactively track your email program.',
      icon: <AtSymbolIcon />,
    },
  ],
}

export { benefitOne, benefitTwo }
