export function AboutMe() {
  const [image1, setImage1] = useState(null);
  const [image2, setImage2] = useState(null);

  return (
    <div className="p-6 bg-pink-100 min-h-screen text-gray-900">
      <h1 className="text-4xl font-bold text-center mb-6">About Me</h1>
      <p className="text-center mb-6">Welcome all! We are delighted to welcome you to this official website for our book club. Layla and I are both in the purple class at Wellesley College. We share a passion for knowledge and reflection. We also share a love of literature and fondness for many of the same thought leaders in our history. We hope to facilitate critical conversations on the political state of the world, our responsibility to ourselves, each other, and our ancestors. We hope that you are encouraged to participate and collaborate as we are sincerely eager to learn from all of you.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h2 className="text-xl font-semibold">Layla's Photo</h2>
          <input type="file" onChange={(e) => setImage1(URL.createObjectURL(e.target.files[0]))} />
          {image1 && <img src={image1} alt="Layla" className="mt-4 w-full rounded-lg" />}
        </div>
        <div>
          <h2 className="text-xl font-semibold">Your Photo</h2>
          <input type="file" onChange={(e) => setImage2(URL.createObjectURL(e.target.files[0]))} />
          {image2 && <img src={image2} alt="You" className="mt-4 w-full rounded-lg" />}
        </div>
      </div>
    </div>
  );
}
