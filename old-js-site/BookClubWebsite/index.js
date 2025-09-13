import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import { FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";
import Link from "next/link";

export default function BookClub() {
  const [suggestion, setSuggestion] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSuggestionSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="p-6 bg-pink-100 min-h-screen text-gray-900">
      <h1 className="text-4xl font-bold text-center mb-6">Book Club Haven</h1>
      
      <div className="text-center mb-6">
        <Link href="/about-me">
          <Button>About Me</Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardContent className="text-center">
            <h2 className="text-2xl font-semibold">Quote of the Day</h2>
            <p className="italic mt-4">“Once you learn to read, you will be forever free.” – Frederick Douglass</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="text-center">
            <h2 className="text-2xl font-semibold">Upcoming Events</h2>
            <Calendar />
          </CardContent>
        </Card>
      </div>

      <div className="mt-8">
        <Card>
          <CardContent>
            <h2 className="text-2xl font-semibold text-center">Suggestion Box</h2>
            {!submitted ? (
              <form onSubmit={handleSuggestionSubmit} className="space-y-4 mt-4">
                <Textarea
                  placeholder="Help us find our next read!"
                  value={suggestion}
                  onChange={(e) => setSuggestion(e.target.value)}
                  required
                />
                <Button type="submit" className="w-full">Submit</Button>
              </form>
            ) : (
              <p className="text-center text-green-600 mt-4">Thank you for your suggestion!</p>
            )}
          </CardContent>
        </Card>
      </div>

      <div className="flex justify-center space-x-6 mt-8">
        <a href="#" className="text-2xl text-pink-600"><FaInstagram /></a>
        <a href="#" className="text-2xl text-blue-500"><FaTwitter /></a>
        <a href="#" className="text-2xl text-blue-700"><FaFacebook /></a>
      </div>
    </div>
  );
}
