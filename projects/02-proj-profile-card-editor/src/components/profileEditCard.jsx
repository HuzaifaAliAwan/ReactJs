import { useState } from "react"

const ProfileEditCard = ({dataHandler}) => {
    const [formData, setFormData] = useState({
        name :'Name',
        description: 'Description',
        picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrXh66ZR5-pcHt-LvRPo40zHoCCnzJa_hqzBaO6FSm5pE9j7FMUcD26sIgdOdh-oUILn8&usqp=CAU'
    });
    function handleChange(event){
        const { id, value } = event.target;
        
        
        setFormData(prevFormData => {
            const updatedFormData = { ...prevFormData, [id]: value };
            dataHandler(updatedFormData); // Send updated data to parent component
            console.log(updatedFormData);
            return updatedFormData;
        });
    }

    return (
        <section className="shadow-lg rounded-lg">
            <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
                    <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
                        <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">
                            Edit Profile
                        </h2>
                        <p className="mt-2 text-base text-gray-600">
                            Edit the information below?{" "}

                        </p>
                        <form action="#" method="POST" className="mt-8">
                            <div className="space-y-5">
                                <div>
                                    <label htmlFor="name" className="text-base font-medium text-gray-900">
                                        {" "}
                                        Full Name{" "}
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                            type="text"
                                            placeholder={formData.name}
                                            id="name"
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="description" className="text-base font-medium text-gray-900">
                                        {" "}
                                        Description{" "}
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                            type="text"
                                            placeholder={formData.description}
                                            id="description"
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="picture" className="text-base font-medium text-gray-900">
                                        {" "}
                                        Picture Link{" "}
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                            type="text"
                                            placeholder={formData.picture}
                                            id="picture"
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>

                                
                            </div>
                        </form>

                    </div>
                </div>

            </div>
        </section>

    )
}

export default ProfileEditCard