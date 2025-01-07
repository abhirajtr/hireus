import { Link } from "react-router-dom"
import { Button } from "../components/ui/button"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "../components/ui/carousel"
import companies from '../data/companies.json'
import Autoplay from "embla-carousel-autoplay"
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"
import faqs from '../data/faqs.json';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../components/ui/accordion"

const LandingPage = () => {
    return (
        <main className="flex flex-col gap-10 sm:gap-20 py-10 sm:px-10">
            <section className="text-center">
                <h1
                    className="flex flex-col py-4 items-center justify-center gradient-title text-4xl font-extrabold sm:text-6xl lg:text-8xl  tracking-tight">
                    Find Opportunities, Get Hired
                    <span>Your Career Starts Here</span>
                </h1>
                <p className="text-gray-300 sm:mt-4 text-xs sm:text-xl">
                    Find the perfect job that matches your skills, experience, and passion.
                </p>
            </section>
            <div className="flex gap-6 justify-center">
                {/* buttons */}
                <Link to="/jobs">
                    <Button>Find Jobs</Button>
                </Link>
                <Link to="post-job">
                    <Button>Post a Job</Button>
                </Link>
            </div>
            {/* carousel */}
            <div className="flex justify-center">
                <Carousel
                    plugins={[Autoplay({ delay: 2000 })]}
                    className="lg:max-w-7xl py-5">
                    <CarouselContent className="flex gap-5 sm:gap-20 items-center">
                        {companies.map(({ name, id, path }) => {
                            return (
                                <CarouselItem key={id} className="basis-1/3 lg:basis-1/6">
                                    <img
                                        src={path}
                                        alt={name}
                                        className="h-9 sm:h-14 object-contain" />
                                </CarouselItem>
                            )
                        })}
                    </CarouselContent>
                </Carousel>

            </div>
            {/* banner */}
            <img src='/banner.jpeg' alt="banner image" className="w-full" />
            <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* cards */}
                <Card>
                    <CardHeader>
                        <CardTitle className="font-bold text-lg">For Job Seekers</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p>Explore thousands of job opportunities, create your professional profile, and land your dream job with ease.</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle className="font-bold text-lg">For Employers</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p>Post job openings, discover top talent, and manage applications effortlessly to build your ideal team.</p>
                    </CardContent>
                </Card>
            </section>
            {/* Accordion */}
            <Accordion type="single" collapsible className="w-full">
                {faqs.map((item, index) => (
                    <AccordionItem value={`item-${index + 1}`} key={index}>
                        <AccordionTrigger>{item.question}</AccordionTrigger>
                        <AccordionContent>
                            {item.answer}
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </main>
    )
}

export default LandingPage