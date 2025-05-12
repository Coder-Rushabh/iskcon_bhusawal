import React from "react";

const activities = [
  {
    title: "Kirtan & Bhajans",
    description:
      "Experience the joy of devotional music with uplifting kirtans and soul-stirring bhajans.",
    image: "/images/kirtan.jpg",
  },
  {
    title: "Spiritual Discourses",
    description:
      "Engaging talks on Bhagavad Gita, Srimad Bhagavatam, and Vedic wisdom for practical application in daily life.",
    image: "/images/discourse.jpg",
  },
  {
    title: "Sunday Feast",
    description:
      "A weekly gathering filled with kirtan, spiritual discussions, and delicious Krishna prasadam.",
    image: "/images/sunday-feast.jpg",
  },
  {
    title: "Children’s Spiritual Education",
    description:
      "Fun-filled activities and teachings from the scriptures designed to nurture young minds.",
    image: "/images/kids-class.jpg",
  },
  {
    title: "Festivals & Celebrations",
    description:
      "Celebrate festivals like Janmashtami, Gaura Purnima, and Ratha Yatra with grandeur and devotion.",
    image: "/images/festival.jpg",
  },
  {
    title: "Seva & Community Service",
    description:
      "Engage in selfless service through food distribution, temple maintenance, and outreach programs.",
    image: "/images/seva.jpg",
  },
  {
    title: "Youth Empowerment Programs",
    description:
      "Interactive sessions and workshops aimed at guiding young individuals towards a spiritually enriched life.",
    image: "/images/youth.jpg",
  },
  {
    title: "Cultural Festivals",
    description:
      "Grand celebrations of festivals with music, dance, dramas, and elaborate rituals showcasing Vedic culture.",
    image: "/images/culture.jpg",
  },
  {
    title: "Community Outreach & Food Distribution",
    description:
      "Initiatives like 'Food for Life' that focus on distributing sanctified vegetarian meals to the underprivileged.",
    image: "/images/food-distribution.jpg",
  },
  {
    title: "Temple Tours & Educational Seminars",
    description:
      "Guided tours and educational sessions explaining temple rituals, deities, and Vedic philosophy.",
    image: "/images/tours.jpg",
  },
  {
    title: "Yoga & Meditation Sessions",
    description:
      "Regular yoga and meditation classes to help individuals achieve physical well-being and mental tranquility.",
    image: "/images/yoga.jpg",
  },
  {
    title: "Book Distribution & Literature Study Groups",
    description:
      "Dissemination of spiritual literature with study groups exploring Vedic scriptures.",
    image: "/images/books.jpg",
  },
];

const Activities = () => {
  return (
    <section className="w-full min-h-screen bg-[#f3d4a5] py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-center text-gray-800 mb-12 uppercase tracking-wide">
          Our Activities
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((activity, index) => (
            <div
              key={index}
              className="bg-white shadow-xl rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <img
                src={activity.image}
                alt={activity.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                  {activity.title}
                </h3>
                <p className="text-gray-600 text-lg">{activity.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Activities;
