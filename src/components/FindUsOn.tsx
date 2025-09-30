import sapAribaLogo from "@/assets/sap-ariba-logo.png";
import zakupivliLogo from "@/assets/zakupivli-pro-logo.png";
import prozorroLogo from "@/assets/prozorro-logo.svg";
const FindUsOn = () => {
  const platforms = [{
    name: "SAP Ariba",
    logo: sapAribaLogo,
    url: "https://service.ariba.com/",
    description: "Global procurement platform"
  }, {
    name: "Zakupivli.pro",
    logo: zakupivliLogo,
    url: "https://zakupivli.pro/en",
    description: "Professional procurement network"
  }, {
    name: "ProZorro",
    logo: prozorroLogo,
    url: "https://prozorro.gov.ua/en",
    description: "Transparent public procurement"
  }];
  return <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-blue-800">Find Us On</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Connect with us on leading global procurement platforms for seamless business partnerships
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {platforms.map(platform => <a key={platform.name} href={platform.url} className="group bg-background rounded-2xl p-8 shadow-sm hover:shadow-elegant transition-all duration-300 border border-border hover:border-primary/20">
              <div className="text-center space-y-4">
                <div className="h-16 flex items-center justify-center mx-0 my-0 py-0 px-[50px]">
                  <img src={platform.logo} alt={`${platform.name} logo`} className="max-h-12 max-w-full object-contain group-hover:scale-105 transition-transform duration-300" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-foreground mb-2">
                    {platform.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {platform.description}
                  </p>
                </div>
              </div>
            </a>)}
        </div>
      </div>
    </section>;
};
export default FindUsOn;