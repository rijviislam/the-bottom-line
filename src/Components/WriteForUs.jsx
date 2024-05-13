export default function WriteForUs() {
  return (
    <div className=" text-center py-5 px-10 lg:w-full md:w-full w-[360px]">
      <h2 className="text-4xl font-bold">WriteForUs</h2>
      <p className="text-start font-medium lg:px-10 lg:mt-5">
        Yes, you. We’re always looking for new authors. If you’ve got an idea
        that will challenge our readers and move our industry forward, we want
        to hear about it. But you don’t need to wait for an idea that will
        redefine web design. Just aim to bring readers a fresh perspective on a
        topic that’s keeping you up at night.
      </p>
      <p className="text-start font-normal lg:px-10 my-3">
        We’ll be honest, though: writing for ALA takes work. We want your
        article to be at its best, and we’ll push you to get there. Once
        accepted, you’ll get extensive feedback from our team, and you’ll work
        closely with an editor on revisions.
      </p>

      <h2 className="text-3xl font-semibold  text-red-600 text-start lg:ml-10">
        What we’re looking for
      </h2>
      <p className="text-start font-normal lg:px-10 my-3">
        You may submit a rough draft, a partial draft, or a short pitch (a
        paragraph or two summarizing your argument and why it matters to our
        readers) paired with an outline. The more complete your submission is,
        the better feedback we can give you. Keep in mind that we only accept
        original content—we do not publish anything that’s been published
        elsewhere (including on your blog).
      </p>
      <ul className="flex flex-col gap-5 text-start lg:mx-14 list-disc">
        <li>
          Has a thesis and offers a clear argument—not just a list of tips and
          tricks.
        </li>
        <li>Has a voice. Be bold, interesting, and human.</li>
        <li>
          Is written for an audience of designers, developers, content
          strategists, information architects, or similar.
        </li>
        <li>
          Is supported with convincing arguments, not just opinions. Fact-check,
          and cite sources where appropriate.
        </li>
        <li>Follows our style guide.</li>
      </ul>
    </div>
  );
}
