<?php

namespace AppBundle\Entity;

use Doctrine\ORM\Mapping as ORM;
use ApiPlatform\Core\Annotation\ApiResource;

/**
 * MobileData
 * @ApiResource
 * @ORM\Table(name="mobile_data"))
 * @ORM\Entity
 */
class MobileData
{

    /**
     * @var integer
     * @ORM\Column(name="id", type="integer", nullable=false)
     * @ORM\Id
     */
    private $id;

    /**
     * @var float
     *
     * @ORM\Column(name="expend", type="float", precision=10, scale=0, nullable=true)
     */
    private $expend;

    /**
     * @var float
     *
     * @ORM\Column(name="converted", type="float", precision=10, scale=0, nullable=true)
     */
    private $converted;

    /**
     * @var integer
     *
     * @ORM\Column(name="fuel_id", type="integer", nullable=true)
     */
    private $fuelId;

    /**
     * @var integer
     * @ORM\Column(name="mobile_id", type="integer", nullable=true)
     */
    private $mobileId;

    /**
     * @return float
     */
    public function getExpend()
    {
        return $this->expend;
    }

    /**
     * @param float $expend
     */
    public function setExpend($expend)
    {
        $this->expend = $expend;
    }

    /**
     * @return float
     */
    public function getConverted()
    {
        return $this->converted;
    }

    /**
     * @param float $converted
     */
    public function setConverted($converted)
    {
        $this->converted = $converted;
    }

    /**
     * @return int
     */
    public function getFuelId()
    {
        return $this->fuelId;
    }

    /**
     * @param int $fuelId
     */
    public function setFuelId($fuelId)
    {
        $this->fuelId = $fuelId;
    }

    /**
     * @return int
     */
    public function getMobileId()
    {
        return $this->mobileId;
    }

    /**
     * @param int $mobileId
     */
    public function setMobileId($mobileId)
    {
        $this->mobileId = $mobileId;
    }

    /**
     * @return int
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * @param int $id
     */
    public function setId($id)
    {
        $this->id = $id;
    }


}

