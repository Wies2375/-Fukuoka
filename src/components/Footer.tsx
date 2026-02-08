import { siteConfig } from "@/data/tours";

const f = siteConfig.footer;

export default function Footer() {
  return (
    <footer id="footer" className="border-t border-gray-200 bg-gray-50 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-4 text-center text-sm text-gray-600 md:flex-row md:justify-between md:text-left">
          <div>
            <p>TEL: {f.tel}</p>
            <p>FAX: {f.fax}</p>
            <p>
              <a href={`mailto:${f.email}`} className="hover:text-primary">
                {f.email}
              </a>
            </p>
            <p>{f.address}</p>
          </div>
          <p className="text-gray-500">
            © {new Date().getFullYear()} {siteConfig.siteName}. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
