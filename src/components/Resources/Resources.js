import React, { Fragment } from 'react'
import Card from 'react-bootstrap/Card'

// <div>
//   <h2>How to Be Safe on a Date</h2>
//   <h2>Survivor Resources (RAINN)</h2>
//   <h2>Who To Call In An Emergency</h2>
//   <h2>How to Recognize Abuse/Unsafe Behavior</h2>
// </div>

const Resources = () => (
  <Fragment>
    <h1 className="page-headers">Resources</h1>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://www.executivefantasyhotels.com/wp-content/uploads/2018/01/First-Date-Ideas.jpg" />
      <Card.Body>
        <Card.Title>How to be Safe on a Date</Card.Title>
        <Card.Text>
          You may be excited for the date, but make sure you read these tips first. We&apos;re happy to give you an excuse to escape, but it&apos;s ultimately up to you to be safe. We recommend following the 15 rules laid out in the article below.
        </Card.Text>
      </Card.Body>
      <Card.Body>
        <Card.Link href="https://www.sheknows.com/health-and-wellness/articles/814219/10-rules-for-dating-safety-1/">Article Link</Card.Link>
      </Card.Body>
    </Card>
    <br/>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://images.ctfassets.net/81iqaqpfd8fy/5I6HsA6kM04QmyKYyaw6aq/3390773ea9213a1cebe67efb4af60b28/Human_Trafficking.jpg?h=620&w=1440" />
      <Card.Body>
        <Card.Title>Be Aware of Human Trafficking</Card.Title>
        <Card.Text>
          Anyone can become a victim of human trafficking and your dad probably isnapos;nt able to go all &ldquo;Nicholas Cage in Taken&ldquo; to save you. Recognizing the signs of human trafficking is not only important for you but for everyone in society.
        </Card.Text>
      </Card.Body>
      <Card.Body>
        <Card.Link href="https://humantraffickinghotline.org/faqs/safety-planning-information">National Human Trafficking Hotline Website</Card.Link>
      </Card.Body>
    </Card>
    <br/>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://miro.medium.com/max/2746/1*OyAhbK4-3iRTqGNvOx5F_Q.png" />
      <Card.Body>
        <Card.Title>Resources for Survivors</Card.Title>
        <Card.Text>
        Statistically one in five women and one in 71 men will be raped at some point in their lives, and 46.4% of lesbians, 74.9% of bisexual women and 43.3% of heterosexual women reported sexual violence other than rape during their lifetimes according to the National Sexual Violence Resource Center. If you are a survivor, you are not alone and there are resources to help you. #MeToo
        </Card.Text>
      </Card.Body>
      <Card.Body>
        <Card.Link href="https://humantraffickinghotline.org/faqs/safety-planning-information">RAINN Website</Card.Link>
        <Card.Text>RAINN 24/7 Hotline:<a href="tel:1-800-656-4673">1-800.656.HOPE (4673)</a></Card.Text>
      </Card.Body>
    </Card>
  </Fragment>
)

export default Resources
