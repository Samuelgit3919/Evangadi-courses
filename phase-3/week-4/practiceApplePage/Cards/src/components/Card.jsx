// import React from 'react'
const infos = [
    {
        image: 'https://i.pinimg.com/736x/60/86/09/608609cb613363a4bec0992fd87c1f9f.jpg',
        title: 'Harry Potter',
        desc: 'loremsdkcqiovgqeio qidhvq',
        price: '21.21',
    },
    {
        image: 'https://i.pinimg.com/736x/46/f8/1c/46f81c175b455727e5fd673557946ef3.jpg',
        title: 'Spider Man',
        desc: 'loremsdkcqiovgqeio qidhvqqeferrg',
        price: '31.34',
    },

]

const Card = () => {
    return (
        <div className="flex justify-center items-center flex-col">
            {infos.map((info) => {
                return (
                    <div key={info.title}>
                        <div className="bg-white rounded-lg shadow-md overflow-hidden max-w-sm m-4">
                            <img
                                className="w-full h-48 object-cover"
                                src={info.image}
                                alt="image"
                            />
                            <div className="p-4">
                                <h2 className="text-xl font-semibold mb-2">{info.title}</h2>
                                <p className="text-gray-600 mb-4">{info.desc}.</p>
                                <div className="flex justify-between items-center">
                                    <span className="text-lg font-bold text-gray-900"> ${info.price}</span>
                                    <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
            )}
        </div>

    )
}

export default Card