import React from "react";

const Blog = () => {
  return (
    <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 mr-20 mt-10 mb-10 ">
      <article className="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Difference between authorization and authentication
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          <span className="font-bold text-lg">Authorization-</span>Authorization
          is a system security.It's a process of giving permission to access a
          specific data,file or resources.Authorization mainly maintained by a
          organization who are concerned about our security.
          <br />
          <span className="font-bold text-lg">Authentication</span>
          Authentication verifies the users. It's works through OTP(one time
          password),passwords and many more.It's the first step to access the
          resources.
        </p>
      </article>
      <article className="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Why are you using firebase? What other options do you have to
          implement authentication?
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          Firebase owned by google.Mainly it's a complete package that allows to
          build web/mobile apps to improve quality. Mainly i use firebase for
          authentication service to secure my website. I can use many things to
          implement authentication like password based,email verify,multi
          factor(2A),token based,biometric etc.
        </p>
      </article>

      <article className="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          What other services does firebase provide other than authentication?
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          Firebase is a complete package that allows us to improve and maintain
          our web/mobile apps quality. They provide us many services than
          authentication like realtime database, Cloud firestore, Storage,
          Hosting and many more. We can use them so easily and provide a quality
          and secure apps.
        </p>
      </article>
    </div>
  );
};

export default Blog;
