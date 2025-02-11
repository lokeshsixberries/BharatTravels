import { useState } from "react";
import {
  Car,
  MapPin,
  Calendar,
  Clock,
  Users,
  Phone,
  Mail,
  Star,
  Shield,
  Wallet,
  Award,
} from "lucide-react";
import "./styles.css";

function App() {
  const [pickupLocation, setPickupLocation] = useState("");
  const [dropLocation, setDropLocation] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [passengers, setPassengers] = useState("1");

  const features = [
    {
      icon: <Shield className="w-12 h-12" />,
      title: "Safe Travel",
      description: "Verified drivers & safety protocols",
    },
    {
      icon: <Clock className="w-12 h-12" />,
      title: "24/7 Service",
      description: "Round the clock support",
    },
    {
      icon: <Wallet className="w-12 h-12" />,
      title: "Best Rates",
      description: "Competitive pricing guaranteed",
    },
    {
      icon: <Award className="w-12 h-12" />,
      title: "Quality Cars",
      description: "Well-maintained premium fleet",
    },
  ];

  const vehicles = [
    {
      name: "13 Seater Tempo Trav (13+1)",
      image:
        "https://cdn.cars24.com/prod/new-car-cms/Maruti-Suzuki/Alto-Tour/2024/10/21/856f6973-044e-4720-91ae-f80150f57d76-Alto-Tour.png",
      rating: 5,
      reviews: 194,
      price: "₹27.00/KM",
      capacity: "13+1",
    },
    {
      name: "13 Seater Tempo Trav (13+1)",
      image:
        "https://itp1.itopfile.com/ImageServer/z_itp_21042021jnto/0/0/1z-z403393300228.png",
      rating: 5,
      reviews: 194,
      price: "₹27.00/KM",
      capacity: "13+1",
    },
    {
      name: "Maruti Suzuki Ertiga (6+1)",
      image:
        "https://www.jcrcab.com/wp-content/uploads/2023/09/21_seater_tempo_traveller.png",
      rating: 5,
      reviews: 194,
      price: "₹14.00/KM",
      capacity: "6+1",
    },
    {
      name: "Toyota Vellfire Hi (7+1)",
      image:
        "https://5.imimg.com/data5/SELLER/Default/2023/1/QJ/JY/IT/183935270/swift-dzire-car-jpg.jpg",
      rating: 5,
      reviews: 194,
      price: "₹160.00/KM",
      capacity: "7+1",
    },
    {
      name: "Swift Dzire (4+1)",
      image:
        "https://www.kindpng.com/picc/m/133-1332266_chevrolet-tavera-white-colour-png-download-tavera-on.png",
      rating: 5,
      reviews: 194,
      price: "₹12.00/KM",
      capacity: "4+1",
    },
    {
      name: "13 Seater Tempo Trav (13+1)",
      image:
        "https://www.carandbike.com/_next/image?url=https%3A%2F%2Fimages.carandbike.com%2Fcar-images%2Fcolors%2Fhyundai%2Felite-i20%2Fhyundai-elite-i20-polar-white-dual-tone.png%3Fv%3D1604909640&w=640&q=75",
      rating: 5,
      reviews: 194,
      price: "₹27.00/KM",
      capacity: "13+1",
    },
    {
      name: "13 Seater Tempo Trav (13+1)",
      image: "https://imgd.aeplcdn.com/370x208/n/u2aoqua_1558441.jpg?q=80",
      rating: 5,
      reviews: 194,
      price: "₹27.00/KM",
      capacity: "13+1",
    },
    {
      name: "Maruti Suzuki Ertiga (6+1)",
      image:
        "https://5.imimg.com/data5/UQ/YI/GLADMIN-64077416/force-traveller-luxury-car-500x500.png",
      rating: 5,
      reviews: 194,
      price: "₹14.00/KM",
      capacity: "6+1",
    },
    {
      name: "Toyota Vellfire Hi (7+1)",
      image:
        "https://images.unsplash.com/photo-1550355291-bbee04a92027?auto=format&fit=crop&w=800&q=80",
      rating: 5,
      reviews: 194,
      price: "₹160.00/KM",
      capacity: "7+1",
    },
    {
      name: "Swift Dzire (4+1)",
      image:
        "https://www.jcrcab.com/wp-content/uploads/2021/09/luxury-bus.jpeg",
      rating: 5,
      reviews: 194,
      price: "₹12.00/KM",
      capacity: "4+1",
    },
    {
      name: "Toyota Vellfire Hi (7+1)",
      image:
        "https://content.jdmagicbox.com/quickquotes/images_main/luxury-shuttle-mini-bus-801386175-vijiqb11.jpg?impolicy=queryparam&im=Resize=(360,360),aspect=fit",
      rating: 5,
      reviews: 194,
      price: "₹160.00/KM",
      capacity: "7+1",
    },
    {
      name: "Swift Dzire (4+1)",
      image:
        "https://content.jdmagicbox.com/comp/suryapet/s7/9999p8684.8684.190817225829.f8s7/catalogue/brhamarambika-travel-kodad-suryapet-bus-ticketing-agents-aquwgv9y65.jpg",
      rating: 5,
      reviews: 194,
      price: "₹12.00/KM",
      capacity: "4+1",
    },
  ];

  const testimonials = [
    {
      name: "John Doe",
      rating: 5,
      comment: "Excellent service! The driver was punctual and professional.",
    },
    {
      name: "Sarah Smith",
      rating: 5,
      comment: "Best cab service I've used. Very reliable and comfortable.",
    },
    {
      name: "Mike Johnson",
      rating: 5,
      comment: "Great experience with their premium fleet. Highly recommended!",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-black text-yellow-400 fixed w-full z-50">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Car className="w-8 h-8" />
              <span className="text-2xl font-bold">Bharat Travels</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a
                href="#home"
                className="hover:text-yellow-300 transition-colors"
              >
                Home
              </a>
              <a
                href="#services"
                className="hover:text-yellow-300 transition-colors"
              >
                Services
              </a>
              <a
                href="#about"
                className="hover:text-yellow-300 transition-colors"
              >
                About
              </a>
              <a
                href="#contact"
                className="hover:text-yellow-300 transition-colors"
              >
                Contact
              </a>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section with Booking Form */}
      <section
        className="pt-24 bg-black text-white min-h-screen flex items-center"
        id="home"
      >
        <div className="container mx-auto px-6 py-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-5xl font-bold text-yellow-400 leading-tight">
                Your Trusted Travel Partner
              </h1>
              <p className="text-xl text-gray-300">
                Book your ride instantly. Experience comfort and safety with our
                premium cab service.
              </p>
              <div className="flex space-x-4">
                <div className="flex items-center space-x-2">
                  <Star className="w-6 h-6 text-yellow-400" />
                  <span>4.9/5 Rating</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="w-6 h-6 text-yellow-400" />
                  <span>10K+ Happy Customers</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-xl">
              <h2 className="text-2xl font-bold text-black mb-6">
                Book Your Ride
              </h2>
              <form className="space-y-4">
                <div>
                  <label className="block text-gray-700 mb-2">
                    Pickup Location
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      value={pickupLocation}
                      onChange={(e) => setPickupLocation(e.target.value)}
                      className="w-full pl-12 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                      placeholder="Enter pickup location"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">
                    Drop Location
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      value={dropLocation}
                      onChange={(e) => setDropLocation(e.target.value)}
                      className="w-full pl-12 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                      placeholder="Enter drop location"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 mb-2">Date</label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                      <input
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className="w-full pl-12 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">Time</label>
                    <div className="relative">
                      <Clock className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                      <input
                        type="time"
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                        className="w-full pl-12 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Passengers</label>
                  <div className="relative">
                    <Users className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <select
                      value={passengers}
                      onChange={(e) => setPassengers(e.target.value)}
                      className="w-full pl-12 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                    >
                      {[1, 2, 3, 4, 5, 6].map((num) => (
                        <option key={num} value={num}>
                          {num} {num === 1 ? "passenger" : "passengers"}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full bg-yellow-400 text-black py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors duration-300"
                >
                  Book Now
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Vehicle Selection Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-4">Our Fleet</h2>
          <p className="text-gray-600 text-center mb-12">
            Choose from our wide range of premium vehicles
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {vehicles.map((vehicle, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-1 transition-transform duration-300"
              >
                <div className="relative h-48">
                  <img
                    src={vehicle.image}
                    alt={vehicle.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-20"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{vehicle.name}</h3>
                  <div className="flex items-center mb-2">
                    <div className="flex">
                      {[...Array(vehicle.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 text-yellow-400 fill-current"
                        />
                      ))}
                    </div>
                    <span className="text-gray-500 text-sm ml-2">
                      {vehicle.reviews} Reviews
                    </span>
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-2xl font-bold text-black">
                      {vehicle.price}
                    </span>
                    <button className="bg-yellow-400 text-black px-6 py-2 rounded-lg font-semibold hover:bg-yellow-300 transition-colors duration-300">
                      Book Now
                    </button>
                  </div>
                  <div className="mt-4 pt-4 border-t">
                    <div className="flex items-center text-gray-600">
                      <Users className="w-5 h-5 mr-2" />
                      <span>Capacity: {vehicle.capacity} Passengers</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50" id="services">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">
            Why Choose Us
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-yellow-400 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-yellow-400">
            What Our Customers Say
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-900 p-6 rounded-lg">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-300 mb-4">"{testimonial.comment}"</p>
                <p className="font-semibold text-yellow-400">
                  {testimonial.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white" id="contact">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">Contact Us</h2>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <Phone className="w-6 h-6 text-yellow-400" />
                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <p className="text-gray-600">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Mail className="w-6 h-6 text-yellow-400" />
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-gray-600">support@bharattravels.com</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <MapPin className="w-6 h-6 text-yellow-400" />
                <div>
                  <h3 className="font-semibold">Address</h3>
                  <p className="text-gray-600">
                    123 Travel Street, Adventure City, AC 12345
                  </p>
                </div>
              </div>
            </div>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
              />
              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-yellow-400 text-black py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-8">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Car className="w-8 h-8 text-yellow-400" />
                <span className="text-2xl font-bold text-yellow-400">
                  Bharat Travels
                </span>
              </div>
              <p className="text-gray-400">
                Your trusted travel partner for safe and comfortable journeys.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#home" className="hover:text-yellow-400">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-yellow-400">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#about" className="hover:text-yellow-400">
                    About
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-yellow-400">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Airport Transfer</li>
                <li>City Tour</li>
                <li>Corporate Travel</li>
                <li>Wedding Cars</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Working Hours</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Monday - Sunday</li>
                <li>24/7 Available</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>© 2025 Bharat. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
