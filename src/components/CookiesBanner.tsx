import { useState, useEffect } from "react";
import { X, Cookie } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";

const CookiesBanner = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const hasAccepted = localStorage.getItem('cookiesAccepted');
    if (!hasAccepted) {
      setShowBanner(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookiesAccepted', 'true');
    setShowBanner(false);
  };

  const declineCookies = () => {
    localStorage.setItem('cookiesAccepted', 'false');
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4">
      <Card className="shadow-elegant border-primary/20">
        <CardContent className="p-4">
          <div className="flex items-start gap-4">
            <Cookie className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
            <div className="flex-1">
              <h3 className="font-semibold text-foreground mb-2">Cookie Policy</h3>
              <p className="text-sm text-muted-foreground mb-4">
                We use cookies to enhance your browsing experience, provide personalized content, 
                and analyze our traffic. By clicking "Accept All", you consent to our use of cookies.
              </p>
              <div className="flex flex-wrap gap-2">
                <Button onClick={acceptCookies} size="sm">
                  Accept All
                </Button>
                <Button onClick={declineCookies} variant="outline" size="sm">
                  Decline
                </Button>
                <Button variant="ghost" size="sm" className="text-xs">
                  Learn More
                </Button>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={declineCookies}
              className="p-1"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CookiesBanner;