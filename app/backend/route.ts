import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    const jsonRequest = await request.json();
    let tier = {
        name: "",
        averagePriceRange: ""
    };

    if (jsonRequest["area"] === "5 square meters and above") {
        tier["name"] = "Luxury";
        tier["averagePriceRange"] = "Minimum $48,000";
    } else if (jsonRequest["area"] === "3-5 square meters") {
        if (jsonRequest["structuralChanges"] === "Significant structural changes") {
            tier["name"] = "Luxury";
            tier["averagePriceRange"] = "Minimum $48,000";
        } else if (jsonRequest["structuralChanges"] === "Some structural changes") {
            if (jsonRequest["plumbingChanges"] === "Major plumbing changes") {
                tier["name"] = "Luxury";
                tier["averagePriceRange"] = "Minimum $48,000";
            } else if (jsonRequest["plumbingChanges"] === "Minor alterations, more scope") {
                if (jsonRequest["fixturesAndFittings"] === "Custom-made joinery and heated towel rails") {
                    tier["name"] = "Luxury";
                    tier["averagePriceRange"] = "Minimum $48,000";
                } else if (jsonRequest["fixturesAndFittings"] === "Mid-range fixtures and fittings") {
                    if (jsonRequest["mirrorOrCabinet"] === "Custom shave cabinet with LED strip lighting") {
                        tier["name"] = "Luxury";
                        tier["averagePriceRange"] = "Minimum $48,000";
                    } else if (jsonRequest["mirrorOrCabinet"] === "Shave cabinets") {
                        if (jsonRequest["tiling"] === "Feature tiles, mosaics, and premium-quality tiling") {
                            tier["name"] = "Luxury";
                            tier["averagePriceRange"] = "Minimum $48,000";
                        } else if (jsonRequest["tiling"] === "Fully tiled to the ceiling") {
                            if (jsonRequest["smallStepUp"] === "Fully recessed floor with zero threshold") {
                                tier["name"] = "Luxury";
                                tier["averagePriceRange"] = "Minimum $48,000";
                            } else if (jsonRequest["smallStepUp"] === "Recessed shower bases") {
                                tier["name"] = "Intermediate";
                                tier["averagePriceRange"] = "$38,000-48,000";
                            } else {
                                tier["name"] = "Intermediate";
                                tier["averagePriceRange"] = "$38,000-48,000";
                            }
                        } else {
                            tier["name"] = "Intermediate";
                            tier["averagePriceRange"] = "$38,000-48,000";
                        }
                    } else {
                        tier["name"] = "Intermediate";
                        tier["averagePriceRange"] = "$38,000-48,000";
                    }
                } else {
                    tier["name"] = "Intermediate";
                    tier["averagePriceRange"] = "$38,000-48,000";
                }
            } else {
                tier["name"] = "Intermediate";
                tier["averagePriceRange"] = "$38,000-48,000";
            }
        } else {
            tier["name"] = "Intermediate";
            tier["averagePriceRange"] = "$38,000-48,000";
        }
    } else if (jsonRequest["area"] === "0-3 square meters") {
        if (jsonRequest["structuralChanges"] === "Significant structural changes") {
            tier["name"] = "Luxury";
            tier["averagePriceRange"] = "Minimum $48,000";
        } else if (jsonRequest["structuralChanges"] === "Some structural changes") {
            if (jsonRequest["plumbingChanges"] === "Major plumbing changes") {
                tier["name"] = "Luxury";
                tier["averagePriceRange"] = "Minimum $48,000";
            } else if (jsonRequest["plumbingChanges"] === "Minor alterations, more scope") {
                if (jsonRequest["fixturesAndFittings"] === "Custom-made joinery and heated towel rails") {
                    tier["name"] = "Luxury";
                    tier["averagePriceRange"] = "Minimum $48,000";
                } else if (jsonRequest["fixturesAndFittings"] === "Mid-range fixtures and fittings") {
                    if (jsonRequest["mirrorOrCabinet"] === "Custom shave cabinet with LED strip lighting") {
                        tier["name"] = "Luxury";
                        tier["averagePriceRange"] = "Minimum $48,000";
                    } else if (jsonRequest["mirrorOrCabinet"] === "Shave cabinets") {
                        if (jsonRequest["tiling"] === "Feature tiles, mosaics, and premium-quality tiling") {
                            tier["name"] = "Luxury";
                            tier["averagePriceRange"] = "Minimum $48,000";
                        } else if (jsonRequest["tiling"] === "Fully tiled to the ceiling") {
                            if (jsonRequest["smallStepUp"] === "Fully recessed floor with zero threshold") {
                                tier["name"] = "Luxury";
                                tier["averagePriceRange"] = "Minimum $48,000";
                            } else if (jsonRequest["smallStepUp"] === "Recessed shower bases") {
                                tier["name"] = "Intermediate";
                                tier["averagePriceRange"] = "$38,000-48,000";
                            } else {
                                tier["name"] = "Intermediate";
                                tier["averagePriceRange"] = "$38,000-48,000";
                            }
                        } else {
                            tier["name"] = "Intermediate";
                            tier["averagePriceRange"] = "$38,000-48,000";
                        }
                    } else {
                        tier["name"] = "Intermediate";
                        tier["averagePriceRange"] = "$38,000-48,000";
                    }
                } else {
                    tier["name"] = "Intermediate";
                    tier["averagePriceRange"] = "$38,000-48,000";
                }
            } else {
                tier["name"] = "Intermediate";
                tier["averagePriceRange"] = "$38,000-48,000";
            }
        } else if (jsonRequest["structuralChanges"] === "No structural changes") {
            if (jsonRequest["plumbingChanges"] === "Major plumbing changes") {
                tier["name"] = "Luxury";
                tier["averagePriceRange"] = "Minimum $48,000";
            } else if (jsonRequest["plumbingChanges"] === "Minor alterations, more scope") {
                if (jsonRequest["fixturesAndFittings"] === "Custom-made joinery and heated towel rails") {
                    tier["name"] = "Luxury";
                    tier["averagePriceRange"] = "Minimum $48,000";
                } else if (jsonRequest["fixturesAndFittings"] === "Mid-range fixtures and fittings") {
                    if (jsonRequest["mirrorOrCabinet"] === "Custom shave cabinet with LED strip lighting") {
                        tier["name"] = "Luxury";
                        tier["averagePriceRange"] = "Minimum $48,000";
                    } else if (jsonRequest["mirrorOrCabinet"] === "Shave cabinets") {
                        if (jsonRequest["tiling"] === "Feature tiles, mosaics, and premium-quality tiling") {
                            tier["name"] = "Luxury";
                            tier["averagePriceRange"] = "Minimum $48,000";
                        } else if (jsonRequest["tiling"] === "Fully tiled to the ceiling") {
                            if (jsonRequest["smallStepUp"] === "Fully recessed floor with zero threshold") {
                                tier["name"] = "Luxury";
                                tier["averagePriceRange"] = "Minimum $48,000";
                            } else if (jsonRequest["smallStepUp"] === "Recessed shower bases") {
                                tier["name"] = "Intermediate";
                                tier["averagePriceRange"] = "$38,000-48,000";
                            } else {
                                tier["name"] = "Intermediate";
                                tier["averagePriceRange"] = "$38,000-48,000";
                            }
                        } else {
                            tier["name"] = "Intermediate";
                            tier["averagePriceRange"] = "$38,000-48,000";
                        }
                    } else {
                        tier["name"] = "Intermediate";
                        tier["averagePriceRange"] = "$38,000-48,000";
                    }
                } else {
                    tier["name"] = "Intermediate";
                    tier["averagePriceRange"] = "$38,000-48,000";
                }
            } else if (jsonRequest["plumbingChanges"] === "Minor plumbing changes") {
                if (jsonRequest["fixturesAndFittings"] === "Custom-made joinery and heated towel rails") {
                    tier["name"] = "Luxury";
                    tier["averagePriceRange"] = "Minimum $48,000";
                } else if (jsonRequest["fixturesAndFittings"] === "Mid-range fixtures and fittings") {
                    if (jsonRequest["mirrorOrCabinet"] === "Custom shave cabinet with LED strip lighting") {
                        tier["name"] = "Luxury";
                        tier["averagePriceRange"] = "Minimum $48,000";
                    } else if (jsonRequest["mirrorOrCabinet"] === "Shave cabinets") {
                        if (jsonRequest["tiling"] === "Feature tiles, mosaics, and premium-quality tiling") {
                            tier["name"] = "Luxury";
                            tier["averagePriceRange"] = "Minimum $48,000";
                        } else if (jsonRequest["tiling"] === "Fully tiled to the ceiling") {
                            if (jsonRequest["smallStepUp"] === "Fully recessed floor with zero threshold") {
                                tier["name"] = "Luxury";
                                tier["averagePriceRange"] = "Minimum $48,000";
                            } else if (jsonRequest["smallStepUp"] === "Recessed shower bases") {
                                tier["name"] = "Intermediate";
                                tier["averagePriceRange"] = "$38,000-48,000";
                            } else {
                                tier["name"] = "Intermediate";
                                tier["averagePriceRange"] = "$38,000-48,000";
                            }
                        } else {
                            tier["name"] = "Intermediate";
                            tier["averagePriceRange"] = "$38,000-48,000";
                        }
                    } else {
                        tier["name"] = "Intermediate";
                        tier["averagePriceRange"] = "$38,000-48,000";
                    }
                } else if (jsonRequest["fixturesAndFittings"] === "Entry-level fixtures and fittings") {
                    if (jsonRequest["mirrorOrCabinet"] === "Custom shave cabinet with LED strip lighting") {
                        tier["name"] = "Luxury";
                        tier["averagePriceRange"] = "Minimum $48,000";
                    } else if (jsonRequest["mirrorOrCabinet"] === "Shave cabinets") {
                        if (jsonRequest["tiling"] === "Feature tiles, mosaics, and premium-quality tiling") {
                            tier["name"] = "Luxury";
                            tier["averagePriceRange"] = "Minimum $48,000";
                        } else if (jsonRequest["tiling"] === "Fully tiled to the ceiling") {
                            if (jsonRequest["smallStepUp"] === "Fully recessed floor with zero threshold") {
                                tier["name"] = "Luxury";
                                tier["averagePriceRange"] = "Minimum $48,000";
                            } else if (jsonRequest["smallStepUp"] === "Recessed shower bases") {
                                tier["name"] = "Intermediate";
                                tier["averagePriceRange"] = "$38,000-48,000";
                            } else {
                            tier["name"] = "Intermediate";
                            tier["averagePriceRange"] = "$38,000-48,000";
                        }
                        } else {
                            tier["name"] = "Intermediate";
                            tier["averagePriceRange"] = "$38,000-48,000";
                        }
                    } else if (jsonRequest["mirrorOrCabinet"] === "Standard mirror") {
                        if (jsonRequest["tiling"] === "Feature tiles, mosaics, and premium-quality tiling") {
                            tier["name"] = "Luxury";
                            tier["averagePriceRange"] = "Minimum $48,000";
                        } else if (jsonRequest["tiling"] === "Fully tiled to the ceiling") {
                            if (jsonRequest["smallStepUp"] === "Fully recessed floor with zero threshold") {
                                tier["name"] = "Luxury";
                                tier["averagePriceRange"] = "Minimum $48,000";
                            } else if (jsonRequest["smallStepUp"] === "Recessed shower bases") {
                                tier["name"] = "Intermediate";
                                tier["averagePriceRange"] = "$38,000-48,000";
                            } else {
                                tier["name"] = "Intermediate";
                                tier["averagePriceRange"] = "$38,000-48,000";
                            }
                        } else if (jsonRequest["tiling"] === "Tiling walls minimum requirements") {
                            if (jsonRequest["smallStepUp"] === "Fully recessed floor with zero threshold") {
                                tier["name"] = "Luxury";
                                tier["averagePriceRange"] = "Minimum $48,000";
                            } else if (jsonRequest["smallStepUp"] === "Recessed shower bases") {
                                tier["name"] = "Intermediate";
                                tier["averagePriceRange"] = "$38,000-48,000";
                            } else if (jsonRequest["smallStepUp"] === "Small step-up into the shower base") {
                                tier["name"] = "Entry";
                                tier["averagePriceRange"] = "$28,000-38,000";
                            } else {
                                tier["name"] = "Entry";
                                tier["averagePriceRange"] = "$28,000-38,000";
                            }
                        } else {
                            tier["name"] = "Entry";
                            tier["averagePriceRange"] = "$28,000-38,000";
                        }
                    } else {
                        tier["name"] = "Entry";
                        tier["averagePriceRange"] = "$28,000-38,000";
                    }
                } else {
                    tier["name"] = "Entry";
                    tier["averagePriceRange"] = "$28,000-38,000";
                }
            } else {
                tier["name"] = "Entry";
                tier["averagePriceRange"] = "$28,000-38,000";
            }
        } else {
            tier["name"] = "Entry";
            tier["averagePriceRange"] = "$28,000-38,000";
        }
    }

    return NextResponse.json({ tier: tier });
}