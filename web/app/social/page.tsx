import Image from "next/image";

export default function Social() {
  return (
    <main>
      <div className="flex w-full">
        <div className="grid flex-grow card rounded-box">
          <figure>
            <img src="/twitter_banner.webp" alt="Twitter" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Twitter!</h2>
            <p>I'm inviting you to join me on Twitter!</p>
            <div className="justify-end card-actions">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
        <div className="divider divider-horizontal"></div>

        <div className="grid flex-grow card rounded-box">
          <figure>
            <img src="/discord_banner.jpg" alt="Discord" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Discord!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="justify-end card-actions">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
        <div className="divider divider-horizontal"></div>

        <div className="grid flex-grow card rounded-box">
          <figure>
            <img src="/twitter_banner.webp" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="justify-end card-actions">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
