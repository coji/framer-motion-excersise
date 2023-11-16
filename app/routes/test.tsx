export default function Component() {
  return (
    <div className="relative h-screen w-full">
      <img
        alt="Product Display"
        className="h-full w-full object-cover"
        height="1080"
        src="/placeholder.svg"
        style={{
          aspectRatio: '1920/1080',
          objectFit: 'cover',
        }}
        width="1920"
      />
      <div className="absolute left-0 top-0 flex h-full w-full flex-col items-center justify-center bg-[rgba(0,0,0,0.4)] p-4">
        <h1 className="text-4xl font-bold text-white">Product Name</h1>
        <p className="text-xl font-semibold text-white">Category</p>
        <p className="mt-2 text-2xl font-bold text-white">$99.99</p>
        <button className="mt-4">Add to Cart</button>
      </div>
      <div className="absolute bottom-0 left-0 w-full p-4">
        <h2 className="text-lg font-semibold text-white">Related Products</h2>
        <div className="mt-2 flex gap-4 overflow-x-auto">
          <div className="h-64 w-48 rounded-lg bg-white shadow-md">
            <img
              alt="Related Product Image"
              className="h-2/3 w-full rounded-t-lg object-cover"
              height="192"
              src="/placeholder.svg"
              style={{
                aspectRatio: '192/192',
                objectFit: 'cover',
              }}
              width="192"
            />
            <div className="p-2">
              <h3 className="text-sm font-bold">Product Name</h3>
              <p className="text-sm text-gray-500">Category</p>
              <p className="mt-2 text-lg font-bold">$99.99</p>
            </div>
          </div>
          <div className="h-64 w-48 rounded-lg bg-white shadow-md">
            <img
              alt="Related Product Image"
              className="h-2/3 w-full rounded-t-lg object-cover"
              height="192"
              src="/placeholder.svg"
              style={{
                aspectRatio: '192/192',
                objectFit: 'cover',
              }}
              width="192"
            />
            <div className="p-2">
              <h3 className="text-sm font-bold">Product Name</h3>
              <p className="text-sm text-gray-500">Category</p>
              <p className="mt-2 text-lg font-bold">$99.99</p>
            </div>
          </div>
          <div className="h-64 w-48 rounded-lg bg-white shadow-md">
            <img
              alt="Related Product Image"
              className="h-2/3 w-full rounded-t-lg object-cover"
              height="192"
              src="/placeholder.svg"
              style={{
                aspectRatio: '192/192',
                objectFit: 'cover',
              }}
              width="192"
            />
            <div className="p-2">
              <h3 className="text-sm font-bold">Product Name</h3>
              <p className="text-sm text-gray-500">Category</p>
              <p className="mt-2 text-lg font-bold">$99.99</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
