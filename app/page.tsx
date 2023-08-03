import { basePath } from '@/next.config';
import { Metadata } from 'next';
import Image from 'next/image';

const title = 'Next.js 13 Static Exports Test';
export const metadata: Metadata = {
  title
};

export default async function Home() {
  return (
    <main>
      <h1>{title}</h1>
      <p>
        参照:{' '}
        <a href="https://nextjs.org/docs/app/building-your-application/deploying/static-exports">
          Deploying: Static Exports | Next.js
        </a>
      </p>
      <p>
        Lorem ipsum dolor sit, amet <strong>consectetur</strong> adipisicing elit. Necessitatibus quis quam sunt eos
        cumque, illum repudiandae modi ipsa nostrum quaerat facere maiores maxime aliquam deserunt voluptatibus placeat
        minus ullam similique! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dictum massa sed felis
        egestas, vel fermentum dui consequat. Curabitur rhoncus quam eu purus faucibus, nec dictum felis viverra. Fusce
        suscipit, purus at finibus accumsan, lectus quam elementum risus, at venenatis elit justo vel dui. Integer
        iaculis nisi ipsum, sit amet ultrices nunc eleifend in?
      </p>
      <p>
        文章は内容本に著作する未然ますない上、<strong>利用しれ財団を</strong>
        制限者可能の投稿メディアをしればはなるあれ、<em>技術の文も</em>
        、保持さコンテンツが配信行っことにおける引用明確なますといるますで。たとえば、<s>対象の著作物</s>
        は、権利の決議係る著作十分ませ方針と公開する、そのフリーをあるて目的で手続基づきのを明記あたりられます。あるいはを、策定事例と引用反するればなり目的に時にする含むことは、理解ますた、場合においては著作権の利用というフリー中の問題はなることが、被著作物は、明瞭の保護をしてフリーで引用できでているないで。
      </p>
      <p className="p-0">
        <Image src={`${basePath}/vercel.svg`} className="inline pr-8 m-0" width={160} height={100} alt="vercel logo" />
        <Image src={`${basePath}/next.svg`} className="inline m-0 pb-1" width={100} height={100} alt="Next.js logo" />
      </p>
    </main>
  );
}
