import { TbArrowsRight } from "react-icons/tb";

export default function EvolutionModal(props: any) {
  const { closeHandler, data } = props;

  return (
    <div
      className="relative z-10"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

      <div className="fixed inset-0 z-10 overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4 flex place-content-center">
              <div className="sm:flex sm:items-start">
                <div className="mt-3 text-center sm:ml-4 sm:mt-0 text-center">
                  <h3
                    className="text-base font-semibold leading-6 text-gray-900"
                    id="modal-title"
                  >
                    Next Evolution
                  </h3>
                  {data?.pokemon?.evolutions != null ? (
                    <div className="mt-2 flex justify-around">
                      <div>
                        <img
                          src={data?.pokemon.image}
                          alt="name"
                          className="h-20 w-20 border-box rounded-lg border-4 border-blue-400 p-2 m-2 object-cover"
                        />
                        <p className="text-blue-400">{data?.pokemon.name}</p>
                      </div>
                      <button>
                        <TbArrowsRight height={100} width={100} />
                      </button>
                      <div>
                        <img
                          src={data?.pokemon?.evolutions[0]?.image}
                          alt="name"
                          className="h-20 w-20 border-box rounded-lg border-4 border-blue-400 p-2 m-2 object-cover"
                        />
                        <p className="text-blue-400">
                          {data?.pokemon?.evolutions[0]?.name}
                        </p>
                      </div>
                    </div>
                  ) : (
                    <div className="text-lg text-red-400">
                      Oops this Pokemon is Maximun Evolved !!
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
              <button
                type="button"
                className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                onClick={closeHandler}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
