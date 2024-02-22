
export function SectionFour () {
    return (
        <div className="py-12">
      <div className="text-center">
        <h2 className="text-3xl font-bold">What we do.</h2>
        <p className="text-gray-600 mt-2">We know every single trick in the book. We've spent more on ads than our competitors. We'll also be brutally honest with you.</p>
      </div>

      <div className="flex flex-wrap justify-center gap-10 mt-8">
        {/* Done For You */}
        <div className="w-full md:w-1/2">
          <h3 className="text-xl font-semibold mb-4">Done For You</h3>
          <ul className="list-none space-y-2">
            {[
              "We create the strategy",
              "We create the campaigns",
              "We collect data & optimise",
              "We scale to unseen heights",
              "We deliver a breathtaking ROI",
              "We take care of everything. A-Z",
              "You sit back and enjoy bi-weekly sales reports",
            ].map((item) => (
              <li key={item} className="flex items-center">
                <span className="text-green-500 mr-2">✔</span> {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Done With You */}
        <div className="w-full md:w-1/2">
          <h3 className="text-xl font-semibold mb-4">Done With You</h3>
          <ul className="list-none space-y-2">
            {[
              "Premium ad campaigns & scaling",
              "Sit-down with your team",
              "Instruct you on how to scale and maintain it in the future",
              "Gives your team great insights",
              "Consulting",
              "In-person workshops last from 2 to 3 days, depending on your individual needs",
            ].map((item) => (
              <li key={item} className="flex items-center">
                <span className="text-green-500 mr-2">✔</span> {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <p className="text-gray-600 text-center mt-8">
        If we mean that your brand & product doesn't have potential to convert profitably through ads, 
        we'll tell you within the first minute of our conversation, and we won't offer you our services.
      </p>
    </div>
    )
}